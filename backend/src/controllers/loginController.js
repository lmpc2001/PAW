const jwt = require('jsonwebtoken');
const { prisma } = require('../database/connection');
const { AES, SHA256, enc } = require('crypto-js');
const fs = require('fs');
const path = require('path');
const privateKey = fs.readFileSync(path.join(__dirname, '../keys', 'privateKey.pem')).toString();

module.exports = {

    async login(request, response, next) {
        try {
            const { email, password } = request.body;
            const hashPassword = SHA256(password).toString();

            const user = await prisma.user.findFirst({
                where: {
                    email,
                    password: hashPassword
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

            if (!user_logedIn) {
                user_logedIn = await prisma.employees.findFirst({
                    where: {
                        user_id: user.id
                    },
                    select: {
                        id: true,
                        user_id: true,
                        name: true,
                        phone_number: true,
                        roule: {
                            select: {
                                description: true
                            }
                        }
                    }
                })

            }

            const login_token = jwt.sign(user_logedIn, privateKey, { algorithm: 'RS256', expiresIn: "30 min" });

            return response.status(200).json({
                login: true,
                user: AES.encrypt(user_logedIn, `${process.env.SECRET}`).toString(),
            })
        } catch (error) {
            next(error)
        }
    },

    async logout(request, response, next) {
        const { token } = req.body;
    }
}