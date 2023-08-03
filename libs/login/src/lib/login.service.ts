import { Injectable } from '@nestjs/common';
import { PrismaClient, loginUser, admin } from '@prisma/client';


const prisma = new PrismaClient();

@Injectable()
export class LoginService {

    // provide all login users
    getAllLoginUsers() {
        return prisma.loginUser.findMany();
    }

    // provide all admins
    getAllAdmins() {
        return prisma.admin.findMany();
    }


    // we can use this onr to log partners and employees
    getLoginUser(username: string, password: string) {
        console.log('loginUser tried')
        return prisma.loginUser.findFirst({ where: { userName: username, userPassword: password } });
    }

    // we can use this one to log admins
    getAdminUser(username: string, password: string) {
        console.log('admin tried')
        return prisma.admin.findFirst({ where: { userName: username, password: password } });
    }

    createLoginUser(loginUser: loginUser) {
        return prisma.loginUser.create({ data: loginUser });
    }

    updateLoginUser(loginUser: loginUser) {
        return prisma.loginUser.update({ where: { userName: loginUser.userName }, data: loginUser });
    }

    createAdminUser(admin: admin) {
        return prisma.admin.create({ data: admin });
    }

    updateAdminUser(admin: admin) {
        return prisma.admin.update({ where: { userName: admin.userName }, data: admin });
    }



}
