import { Injectable } from '@nestjs/common';
import { PrismaClient, productType } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProductTypeService {

    public async getProductTypes(): Promise<productType[]> {
        return await prisma.productType.findMany();
    }

    public async getProductsByType(productTypeId: number) {
        const result = await prisma.productType.findFirst({
            where: { id: productTypeId },
            include: { products: true }
        })
        return result?.products;
    }

    public async saveProductType(productType: any) {
        return await prisma.productType.create({ data: productType });
    }

    public async updateProductType(productType: any) {
        return await prisma.productType.update({
            where: { id: productType.id },
            data: productType
        });
    }

    public async deleteProductType(_id: number) {
        return await prisma.productType.delete({ where: { id: _id } });
    }

}
