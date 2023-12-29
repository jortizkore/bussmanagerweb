import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class LostService {

    async getLost(id: number) {
        return await prisma.lost.findFirst({ where: { id: id } });
    }

    async saveLost(lost: any) {
        return await prisma.lost.create({ data: lost });
    }

    async updateLost(lost: any) {
        return await prisma.lost.update({ data: lost, where: { id: lost.id } });
    }

    async deleteLost(id: number) {
        return await prisma.lost.delete({ where: { id: id } });
    }

}
