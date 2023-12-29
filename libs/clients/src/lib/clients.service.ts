import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

@Injectable()
export class ClientsService {

    // * GET ALL CLIENTS SHOULD BE IN BUSSINESS SERVICE BECAUSE ALL CLIENTS 

    async getClient(_id: number) {
        return prisma.client.findFirst({
            where: { id: _id },
        });
    }

    async saveClient(client: any) {
        return prisma.client.create({ data: client });
    }

    async updateClient(client: any) {
        return prisma.client.update({ data: client, where: { id: client.id } });
    }

    async removeClient(id: number) {
        return prisma.client.delete({ where: { id: id } });
    }

}
