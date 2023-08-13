import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { Partner } from "./partner.model";
// TODO: eslint-disable-next-line @nx/enforce-module-boundaries
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from "apps/buss-manager-client/src/environments/environment";


const httpOptions = {
    headers: {
        'Content-Type': 'application/json'
    }
}

@Injectable({
    providedIn: 'root'
})
export class PartnerService {
    partners$ubject: Subject<any> = new Subject();
    subscriptions: Subscription[] = [];
    apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getPartners() {
        this.subscriptions.push(
            this.http.get(`${this.apiUrl}partner/partners`).subscribe(res => {
                if (res) {
                    console.log(res);
                    this.partners$ubject.next(res);
                }
            })
        )
    }

    getPartnersBussinessess(_id: string) {
        this.http.post(`${this.apiUrl}bussiness/bussiness-by-partner`, JSON.stringify({ id: _id }), httpOptions).subscribe(
            res => {
                if (res) {
                    console.log('Bussinesses: ', res);
                }
            }, (error) => {
                console.log(error);
            }
        )
    }

    createPartner(partner: Partner) {
        console.log('FE partner: ', partner);
        this.http.post(`${this.apiUrl}partner/partner`, JSON.stringify(partner), httpOptions).subscribe(
            res => {
                if (res) {
                    console.log(res);
                }
            }, (error) => {
                console.log(error);
            }
        )
    }

    updatePartner(partner: Partner) {
        console.log('FE partner to update: ', partner);
        this.http.patch(`${this.apiUrl}partner/partner`, JSON.stringify(partner), httpOptions).subscribe(
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