
import { Injectable, inject } from "@angular/core";
import { authenticatedUser } from "./authenticated-user.model";
import { Router } from "@angular/router";
import { NotificationService } from "../services/notification.service";


@Injectable()
export class AuthService {

    isUserLoggedIn = false;
    loggedUser: authenticatedUser | null = null;
    //static router = inject(Router);

    // Services
    notificationsService = inject(NotificationService);

    constructor(public router: Router) {
        //console.log
    }

    setLoggedUser(_loggedUser: any) {
        this.loggedUser = _loggedUser;
    }

    verifyLoggedUser() {
        this.getSessionUser();

        console.log(this.loggedUser);
        if (this.loggedUser !== null) {
            console.log('hit');
            console.log(this.loggedUser);
            this.isUserLoggedIn = true;
        } else {
            this.notificationsService.showAlertMessage('Login needed', 'You need to be logged to access this view');
            this.router.navigate(['login-page']);
        }
    }

    verifyIfAdmin() {
        this.verifyLoggedUser()
        if (this.loggedUser?.isAdmin) {
            return;
        }
        this.notificationsService.showAlertMessage('Login needed', 'You need to be admin to access this view');
        this.router.navigate(['']);
    }

    getSessionUser() {
        const user = sessionStorage.getItem('loggedUser');

        if (user != null)
            this.loggedUser = JSON.parse(user);
    }

    addUserLogged(user: any) {

        this.loggedUser = {
            userId: user.userId,
            userName: user?.userName,
            userRoles: user?.userRoles,
            isAdmin: user?.isAdmin,
            isPartner: user.partnerId ? true : false,
            id: user?.id,
            partnerId: user?.partnerId,
            names: user?.names,
            adminName: user?.adminName
        }

        this.isUserLoggedIn = true;
        sessionStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
    }

    logOut() {
        this.isUserLoggedIn = false;
        this.loggedUser = null;
        sessionStorage.removeItem('loggedUser');
    }

    getLoggedUser = () => {
        this.verifyLoggedUser();
        return this.isUserLoggedIn ? this.loggedUser : null
    };

    createFakeAdminUser() {
        this.loggedUser = {
            id: "asdasd-asdasdasd-asdasdasd-asdasdasdasd",
            partnerId: "",
            adminName: "BMW-admin",
            userId: "0",
            userName: "No-user-name-Needed",
            userRoles: ['Administrator'],
            names: "admin",
            isAdmin: true,
            isPartner: false
        };
    }

    createFakePartnerUser() {
        this.loggedUser = {
            id: "asdasd-asdasdasd-asdasdasd-asdasdasdasd",
            partnerId: "",
            adminName: "BMW-partner",
            userId: "0",
            userName: "No-user-name-Needed",
            userRoles: ['Partner'],
            names: "partner",
            isAdmin: false,
            isPartner: true
        };
    }

}