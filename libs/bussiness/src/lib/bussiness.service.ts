import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class BussinessService {

    getBussiness() {
        return prisma.bussiness.findMany();
    }

    getBussinessById(id: string) {
        return prisma.bussiness.findUnique({ where: { id: id } });
    }

    async createBussiness(bussiness: any): Promise<any> {
        const buss = await prisma.bussiness.create({ data: bussiness });
        return buss;
    }

    async patchBussiness(bussiness: any): Promise<any> {
        const buss = await prisma.bussiness.update(
            {
                where: { id: bussiness.id },
                data: bussiness
            });

        return buss;
    }

    async removeBussiness(_id: string) {
        const removedBussiness = await prisma.bussiness.delete({
            where: {
                id: _id,
            }
        });
        console.log(`Bussiness removed: `, removedBussiness);
        return removedBussiness;
    }
}
