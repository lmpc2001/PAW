const { prisma } = require('../database/connection');
const stripe = require('stripe')('API_KEY');

module.exports = {
    async index(request, response, next) {
        try {
            const purchases = await prisma.purchases.findMany({
                include: {
                    books: {
                        select: {
                            book: true
                        }
                    }
                }
            });

            if (!purchases) {
                return response.status(404).send("No purchases have yet been added to the platform!");
            }

            return response.status(200).render('purchaseView', { purchases });

        } catch (error) {
            next(error);
        }
    },

    async search(request, response, next) {
        try {
            const { id } = request.params;

            const purchases = await prisma.purchases.findMany({
                where: {
                    id
                },
                include: {
                    books: {
                        where: {
                            purchase_id: id
                        },
                        select: {
                            book: true
                        }
                    }
                }
            });

            if (!purchases) {
                return response.status(404).send("Purchase not found!");
            }

            return response.status(200).render('purchaseView', { purchases });

        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const { employee_id, client_id, nif, books } = request.body;
            let total_price = 0;
            let purchase;

            books.forEach(book => {
                total_price += book.price
            });

            if (employee_id) {
                purchase = await prisma.purchases.create({
                    data: {
                        employee: {
                            connect: {
                                id: employee_id
                            }
                        },
                        client: {
                            connect: {
                                id: client_id
                            }
                        },
                        books: {
                            createMany: {
                                data: books.map(book => {
                                    return {
                                        book_id: book.id
                                    }
                                })
                            }
                        },
                        nif,
                        total_price,
                        acumulated_points: 10,
                    }
                })
            }
            else {
                purchase = await prisma.purchases.create({
                    data: {
                        client: {
                            connect: {
                                id: client_id,
                            }
                        },
                        books: {
                            createMany: {
                                data: books.map(book => {
                                    return {
                                        book_id: book.id
                                    }
                                })
                            }
                        },
                        nif,
                        total_price,
                        acumulated_points: 10,
                    }
                });
            }

            return response.status(201).json({
                purchase_id: purchase.id,
                message: "Purchase created successfully"
            });
        } catch (error) {
            next(error)
        }
    },

    async completePurchase(request, response, next) {
        try {
            const {
                purchase_id
            } = request.params;

            const purchase = await prisma.purchases.findUnique({
                where: {
                    id: purchase_id
                }
            })

            if (!purchase) {
                return response.status(404).send("Purchase not found");
            }

            await prisma.accounts.updateMany({
                where: {
                    client_id: purchase.client_id
                },
                data: {
                    points: {
                        increment: purchase.acumulated_points
                    },
                }
            })

            // const session = await stripe.checkout.sessions.create({
            //     line_items: [
            //         purchase.books
            //     ],
            //     mode: 'payment',
            //     success_url: `localhost:3333/success.html`,
            //     cancel_url: `localhost:3333/cancel.html`,
            // })

            return response.status(200).send("Purchase Completed");
        } catch (error) {
            next(error);
        }

    },

    async update(request, response, next) {
        try {
            const { id } = request.params;
            const { total_price } = request.body;

            const purchase = await prisma.purchases.findUnique({
                where: {
                    id
                }
            })

            if (!purchase) {
                return response.status(200).send("Purchase not found!");
            }

            await prisma.purchases.update({
                where: {
                    id
                },
                data: {
                    total_price
                }
            })

            return response.status(200).send("Purchase updated successfuly!");
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            const purchase = await prisma.purchases.findUnique({
                where: {
                    id
                }
            })

            if (!purchase) {
                return response.status(200).send("Purchase not found!");
            }

            await prisma.purchases.delete({
                where: {
                    id
                }
            });

            return response.status(200).send("Purchase removed successfuly!");
        } catch (error) {
            next(error);
        }
    }
}