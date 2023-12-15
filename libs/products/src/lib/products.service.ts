import { Injectable } from '@nestjs/common';
import { PrismaClient, product } from '@prisma/client';


const prisma = new PrismaClient();

@Injectable()
export class ProductsService {

    async getProduct(_id: string) {
        const product = await prisma.product.findFirst({
            where: {
                id: _id,
            }
        });
        return product;
    }

    public async getAllBussinessProducts(_bussinessId: string): Promise<product[]> {
        return await prisma.product.findMany({
            where: {
                bussinessId: _bussinessId
            }
        });
    }

    getAllBussinessProductsByCathegory(_bussinessId: string, _productTypeId: number): Promise<product[]> {
        return prisma.product.findMany({
            where: {
                bussinessId: _bussinessId,
                productTypeId: _productTypeId,
            }
        });
    }

    public async saveProduct(product: any) {
        return await prisma.product.create({ data: product });
    }

    public async updateProduct(product: any) {
        const updated = await prisma.product.update(
            {
                where: {
                    id: product.id,
                },
                data: product
            }
        );
        return updated;
    }

    public async deleteProduct(_id: string) {
        return prisma.product.delete({
            where: {
                id: _id,
            }
        });
    }
}
