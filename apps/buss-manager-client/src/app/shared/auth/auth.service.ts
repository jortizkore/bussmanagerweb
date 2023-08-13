import { Injectable } from "@nestjs/common";
import { authenticatedUser } from "./authenticated-user.model";

@Injectable()
export class AuthService {

    isUserLoggedIn = false;
    loggedUser: authenticatedUser = {
        userId: "",
        userName: "",
        userRoles: [],
        names: "",
        isAdmin: false,
        isPartner: false
    };

    constructor() {
        //console.log
    }

    addUserLogged(user: any) {
        this.loggedUser.userId = user.userId;
        this.loggedUser.userName = user.userName;
        this.loggedUser.userRoles = user.userRoles;
        this.loggedUser.isAdmin = user.isAdmin;
        this.loggedUser.isPartner = user.isPartner;
    }



}