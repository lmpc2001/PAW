const { SHA256 } = require('crypto-js');
const { prisma } = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const employees = await prisma.employees.findMany({
                include: {
                    roule: true,
                    user: {
                        select: {
                            email: true,
                        }
                    }
                }
            });

            if (!employees) {
                return response.status(404).send("No employees have yet been added to the platform!");
            }

            // return response.status(200).render('employeeView', { employees })
            return response.status(200).json({ employees })
        } catch (error) {
            next(error);
        }
    },

    async search(request, response, next) {
        try {
            const { id } = request.params;

            const employees = await prisma.employees.findMany({
                where: {
                    id
                },
                include: {
                    roule: true
                }
            });

            if (!employees) {
                return response.status(404).send("Employee not found!");
            }

            // return response.status(200).render('employeeView', { employees })
            return response.status(200).json({ employees })
        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            let { name, email, password, phone_number } = request.body.employee;

            const user = await prisma.user.findUnique({
                where:{
                    email: email
                }
            });

            if (user) {
                return response.status(400).send("Email is already beeing used");
            }

            phone_number = Number(phone_number);

            await prisma.user.create({
                data: {
                    employees: {
                        create: {
                            name,
                            phone_number,
                            roule: {
                                create: {
                                    description: "user"
                                }
                            }
                        },
                    },
                    email,
                    password: SHA256(password).toString()
                }
            })

            return response.status(201).send("Employee created successfully");
        } catch (error) {
            next(error)
        }
    },

    async create_Admin(request, response, next) {
        try {
            const { name, email, password, phone_number } = request.body;

            await prisma.user.create({
                data: {
                    employees: {
                        create: {
                            name,
                            phone_number,
                            roule: {
                                create: {
                                    description: "admin"
                                }
                            }
                        },
                    },
                    email,
                    password: SHA256(password).toString()
                }
            })

            return response.status(201).send("Employee created successfully");
        } catch (error) {
            next(error)
        }
    },

    async update(request, response, next) {
        try {
            const { id } = request.params;
            let { name, email, phone_number } = request.body;

            phone_number = Number(phone_number);


            let employee = await prisma.employees.findUnique({
                where: {
                    id
                }
            })

            if (!employee) {
                return response.status(200).send("Employee not found!");
            }

            employee = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            if (employee) {
                return response.status(400).send("Email is already beeing used");
            }

            await prisma.employees.update({
                where: {
                    id
                },
                data: {
                    name: name != undefined ? name : undefined,
                    phone_number: phone_number != undefined ? phone_number : undefined,
                    user: {
                        update: {
                            email: email != undefined ? email : undefined
                        }
                    }
                }
            })

            return response.status(200).send("Employee updated successfuly!");
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            const employee = await prisma.employees.findUnique({
                where: {
                    id
                },
                select: {
                    user: true
                }
            })

            if (!employee) {
                return response.status(200).send("Employee not found!");
            }

            await prisma.employees.delete({
                where: {
                    id
                }
            });


            return response.status(200).send("Employee removed successfuly!");
        } catch (error) {
            next(error);
        }
    }
}