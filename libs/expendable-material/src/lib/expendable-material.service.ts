import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

@Injectable()
export class ExpendableMaterialService {

    async getExpMaterial(_id: number) {
        return prisma.expendableMaterial.findFirst({ where: { id: _id } });
    }

    async saveExpMaterial(expMaterial: any) {
        return prisma.expendableMaterial.create({ data: expMaterial });
    }

    async updateExpMaterial(expMaterial: any) {
        return prisma.expendableMaterial.update({ data: expMaterial, where: { id: expMaterial.id } });
    }

    async deleteExpMaterial(_id: number) { 
        return prisma.expendableMaterial.delete({ where: { id: _id } });
    }

}
