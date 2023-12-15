import { Injectable } from '@nestjs/common';
import { PrismaClient, partner } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PartnerService {

  public getPartners(): Promise<partner[]> {
    return prisma.partner.findMany();
  }

  public async getPartner(id: string) {
    const partner = await prisma.partner.findFirst(
      {
        where: {
          id: id
        }
      });

    return partner;
  }

  public async createPartner(partner: any) {
    const createdPartner = await prisma.partner.create(partner);
    console.log(`Partner created: `, createdPartner);
    return createdPartner;
  }

  public async updatePartner(partner: any) {
    const updatedPartner = await prisma.partner.update(
      {
        where: {
          id: partner.id,
        },
        data: partner
      }
    );
    console.log(`Partner updated: `, updatedPartner);
    return updatedPartner;
  }

  public async deletePartner(_id: string) {
    const removedPartner = await prisma.partner.delete({
      where: {
        id: _id,
      }
    });
    console.log(`Partner removed: `, removedPartner);
    return removedPartner;
  }

}
