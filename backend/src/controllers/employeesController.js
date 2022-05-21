const { SHA256 } = require('crypto-js');
const { prisma } = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const employees = await prisma.employees.findMany({
                include: {
                    roule: true
                }
            });

            if (!employees) {
                return response.status(404).send("No employees have yet been added to the platform!");
            }

            return response.status(200).render('employeeView', { employees })
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

            return response.status(200).render('employeeView', { employees })

        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
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
            const { name } = request.body;

            const employee = await prisma.employees.findUnique({
                where: {
                    id
                }
            })

            if (!employee) {
                return response.status(200).send("Employee not found!");
            }

            await prisma.employees.update({
                where: {
                    id
                },
                data: {
                    name
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