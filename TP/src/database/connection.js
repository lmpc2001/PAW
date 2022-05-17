const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function connectToCluster() {
    try {
        await prisma.$connect();
    } catch (error) {
        throw (error);
    }
}

module.exports = {prisma, connectToCluster};