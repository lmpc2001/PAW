const jwt = require('jsonwebtoken');
const { prisma } = require('../database/connection');
const sha256 = require('crypto-js/sha256');

module.exports = {

    async login(request, response, next) {
        const { email, password } = request.body;
        let login_token;

        const user = await prisma.user.findFirst({
            where: {
                email,
                password: sha256.encrypt(password).toString()
            }
        })

        if (!user) {
            return response.status(404).send("User not found!");
        }

        let user_logedIn = await prisma.clients.findFirst({
            where: {
                user_id: user.id
            }
        })

        login_token = jwt.sign({ client_id: user_logedIn?.id }, 'private_key', { expiresIn: "30 min" });

        if (!user_logedIn) {
            user_logedIn = await prisma.employees.findFirst({
                where: {
                    user_id: user.id
                },
                include: {
                    roule: {
                        select: {
                            description: true
                        }
                    }
                }
            })
            login_token = jwt.sign({ employee_id: user_logedIn.id, roule: user_logedIn.roule }, 'private_key', { expiresIn: "30 min" });
        }


        return response.status(200).json({
            token: login_token,
        })

    },

    async logout(request, response, next) {
        const { token } = req.body;
    }
}