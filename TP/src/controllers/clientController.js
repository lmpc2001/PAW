const sha256 = require('crypto-js/sha256');
const { prisma } = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const clients = await prisma.clients.findMany({
                include: {
                    accounts: true
                }
            });

            if (!clients) {
                return response.status(404).send("No clients have yet been added to the platform!");
            }

            return response.status(200).render('clientView', { clients });
        } catch (error) {
            next(error);
        }
    },

    async search(request, response, next) {
        try {
            const { id } = request.params;

            const clients = await prisma.clients.findMany({
                where: {
                    id,
                },
                include: {
                    accounts: true
                }
            });

            if (!clients) {
                return response.status(404).send("Client not found!");
            }

            return response.status(200).render("clientView", { clients });

        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const { platform } = request.query;
            const { employee_id,
                name,
                email,
                password,
                phone_number } = request.body;

            if (platform == "web") {
                await prisma.user.create({
                    data: {
                        clients: {
                            create: {
                                name,
                                phone_number
                            }
                        },
                        email,
                        password: sha256.encrypt(password).toString()
                    }
                })
            } else {
                await prisma.clients.create({
                    data: {
                        employee: {
                            connect: {
                                id: employee_id
                            }
                        },
                        name,
                        phone_number
                    }
                })
            }


            return response.status(201).send("Client created successfully");
        } catch (error) {
            next(error)
        }
    },

    async update(request, response, next) {
        try {
            const { id } = request.params;
            const { name } = request.body;

            const client = await prisma.clients.findUnique({
                where: {
                    id
                }
            })

            if (!client) {
                return response.status(200).send("Client not found!");
            }

            await prisma.clients.update({
                where: {
                    id
                },
                data: {
                    name
                }
            })

            return response.status(200).send("Client updated successfuly!");
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            const client = await prisma.clients.findUnique({
                where: {
                    id
                }
            })

            if (!client) {
                return response.status(200).send("Client not found!");
            }

            await prisma.clients.delete({
                where: {
                    id
                },
            });

            return response.status(200).send("Client removed successfuly!");
        } catch (error) {
            next(error);
        }
    }
}