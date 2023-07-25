import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from "apps/buss-manager-client/src/environments/environment";
import { Subject, Subscription } from "rxjs";
import { Bussiness } from "./bussiness.model";

const httpOptions = {
    headers: {
        'Content-Type': 'application/json'
    }
}

@Injectable()
export class BussinessService {
    subscriptions: Subscription[] = [];
    bussiness$ubject: Subject<any> = new Subject();
    apiUrl = environment.apiUrl;



    constructor(private http: HttpClient) {

    }

    getBussiness() {
        this.subscriptions.push(
            this.http.get(`${this.apiUrl}bussiness/bussiness`).subscribe(res => {
                if (res) {
                    this.bussiness$ubject.next(res);
                }
            })
        )
    }

    createBussiness(bussiness: Bussiness) {
        console.log('FE bussiness: ', bussiness);
        this.http.post(`${this.apiUrl}bussiness/bussiness`, JSON.stringify(bussiness), httpOptions).subscribe(
            res => {
                if (res) {
                    console.log(res);
                }
            }, (error) => {
                console.log(error);
            }
        )
    }
    updateBussiness(bussiness: Bussiness) {
        console.log('FE bussiness: ', bussiness);
        this.http.patch(`${this.apiUrl}bussiness/bussiness`, JSON.stringify(bussiness), httpOptions).subscribe(
            res => {
                if (res) {
                    console.log(res);
                }
            }, (error) => {
                console.log(error);
            }
        )
    }
}
