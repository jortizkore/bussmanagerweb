import { Injectable } from "@nestjs/common";
import { LoggedUser } from "./loggedUser";

@Injectable()
export class LoggedUserService {
    loggedUser: LoggedUser | undefined;
    constructor() { 
        //console.log(loggedUser);
    }
}