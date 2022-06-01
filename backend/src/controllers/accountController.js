const { prisma } = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const accounts = await prisma.accounts.findMany();

            if (!accounts) {
                return response.status(404).send("Sem contas criadas!");
            }

            // return response.status(200).send(accounts);
            return response.status(200).json({ accounts });
        } catch (error) {
            next(error);
        }
    },

    async show(request, response, next) {
        try {
            const { client_id } = request.params;

            const account = await prisma.accounts.findMany({
                where: {
                    client_id
                }
            });

            if (!account) {
                return response.status(404).send("O cliente selecionado não possui um programa de fidelização");
            }

            // return response.status(200).send(account);
            return response.status(200).json({ accounts });

        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const { id } = request.params;
            const { points = 50,
                transfer_description = 'Assinatura do plano de fidelização'
            } = request.body;


            await prisma.accounts.create({
                data: {
                    client: {
                        connect: {
                            id
                        }
                    },
                    points,
                    transfer_description
                }
            });

            return response.status(201).send("Conta registada com sucesso");
        } catch (error) {
            next(error);
        }

    },

    async update(request, response, next) {
        try {
            const { client_id } = request.body;

            const account = await prisma.accounts.findUnique({
                where: {
                    client_id
                }
            })

            if (!account) {
                return response.status(404).send("O cliente selecionado não possui um programa de fidelização");
            }

            await prisma.accounts.update({
                where: {
                    client_id
                },
                points
            })

            return response.status(200).send("Conta atualizada com sucesso");

        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { client_id } = request.body;

            const account = await prisma.accounts.findUnique({
                where: {
                    client_id
                }
            })

            if (!account) {
                return response.status(404).send("O cliente selecionado não possui um programa de fidelização");
            }

            await prisma.accounts.delete({
                where: {
                    client_id
                },
            })

            return response.status(200).send("Conta apagada com sucesso");

        } catch (error) {
            next(error);
        }
    },
}