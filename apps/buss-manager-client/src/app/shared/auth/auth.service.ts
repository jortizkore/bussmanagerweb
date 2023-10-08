
import { Injectable } from "@angular/core";
import { authenticatedUser } from "./authenticated-user.model";


@Injectable()
export class AuthService {

    static isUserLoggedIn = false;
    static loggedUser: authenticatedUser = {
        id: "",
        partnerId: "",
        adminName: "",
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

    static verifyLoggedUser() {
        const user = sessionStorage.getItem('loggedUser');
        if (user !== null) {
            console.log('hit');
            AuthService.loggedUser = JSON.parse(user);
            console.log(AuthService.loggedUser);
            AuthService.isUserLoggedIn = true;
        }
        AuthService.isUserLoggedIn = false;
    }

    static addUserLogged(user: any) {
        this.loggedUser.userId = user?.userId;
        this.loggedUser.userName = user?.userName;
        this.loggedUser.userRoles = user?.userRoles;
        this.loggedUser.isAdmin = user?.isAdmin;
        this.loggedUser.isPartner = user?.isPartner;
        this.loggedUser.id = user?.id;
        this.loggedUser.partnerId = user?.partnerId;
        this.loggedUser.names = user?.names;
        this.loggedUser.adminName = user?.adminName;
        this.isUserLoggedIn = true;

        sessionStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
    }

    static logOut() {
        this.isUserLoggedIn = false;
        sessionStorage.removeItem('loggedUser');
    }

    static getLoggedUser = () => {
        AuthService.verifyLoggedUser();
        return AuthService.isUserLoggedIn ? AuthService.loggedUser : null
    };

}