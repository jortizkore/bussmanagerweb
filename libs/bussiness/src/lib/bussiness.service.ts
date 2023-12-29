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

    getBussinessProducts(bussinessId: string) {
        const result = prisma.bussiness.findFirst({
            where: { id: bussinessId },
            include: {
                products: true
            }
        });
        return result.products;
    }

    async getBussinessByPartnerId(id: string) {

        const partner = await prisma.partner.findUnique({
            where: { id: id }, include: {
                bussinesses: true
            }
        });
        console.log(partner);
        return partner?.bussinesses;
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
        return removedBussiness;
    }

    async getBussinessClients(_id: string) {
        const bussiness = await prisma.bussiness.findFirst({
            where: {
                id: _id,
            },
            include: {
                clients: true,
            }
        });

        return bussiness.clients ? bussiness.clients : [];
    }

    async getBussinessExpandableMaterials(_id: string) {
        const bussiness = await prisma.bussiness.findFirst({
            where: {
                id: _id,
            },
            include: {
                expendableMaterials: true,
            }
        });

        return bussiness.expendableMaterials ? bussiness.expendableMaterials : [];
    }

    async getBussinessLosts(_id: string) {
        const bussiness = await prisma.bussiness.findFirst({
            where: {
                id: _id,
            },
            include: {
                losts: true,
            }
        });

        return bussiness.losts ? bussiness.losts : [];
    }

    async getBussinessPrividers(_id: string) {
        const bussiness = await prisma.bussiness.findFirst({
            where: {
                id: _id,
            },
            include: {
                providers: true,
            }
        });

        return bussiness.providers ? bussiness.providers : [];
    }

}
