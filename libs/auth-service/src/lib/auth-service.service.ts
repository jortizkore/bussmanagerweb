import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';

const Prisma = new PrismaClient()

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async createJwtToken(userBody: string): Promise<string> {
        const payload = { sub: userBody };
        return await this.jwtService.signAsync(payload);
    }

    // In a real application, you would have a method to validate users by ID or other credentials.
    async validateUserById(userBody: string): Promise<any> {
        // * Need to validate login user exist in local Database
        const user = await this.jwtService.verifyAsync(userBody);
        console.log('Thius is the verification value form jwt: ', user);
    }
}
