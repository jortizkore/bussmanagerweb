import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from 'apps/buss-manager-client/src/environments/environment'


const httpOptions = {
    headers: {
        'Content-Type': 'application/json'
    }
}

@Injectable()
export class LoginService {
    subscriptions: Subscription[] = [];
    login$ubject: Subject<any> = new Subject();
    constructor(private http: HttpClient) {

    }

    logInUser(loginUserBody: any) {
        this.subscriptions.push(
            this.http.post(`${environment.apiUrl}login/login`, loginUserBody, httpOptions).subscribe(res => {
                if (res) {
                    console.log(res);
                }
            }, err => {
                alert(err.message);
                console.log(err);
            }
            )
        );
        this.clearSubs();
    }

    clearSubs() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}
