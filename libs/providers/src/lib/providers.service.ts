import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProvidersService {

    async getProvider(_id: number) {
        return prisma.provider.findFirst({ where: { id: _id } })
    }

    async saveProvider(provider: any) {
        return prisma.provider.create({ data: provider });
    }

    async updateProvider(provider: any) {
        return prisma.provider.update({ data: provider, where: { id: provider.id } });
    }

    async removeProvider(id: number) {
        return prisma.provider.delete({ where: { id: id } });
    }

}
