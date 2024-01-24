import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from "apps/buss-manager-client/src/environments/environment";
import { Subject, Subscription } from "rxjs";
import { Bussiness } from "../../shared/models/bussiness.model";

const httpOptions = {
    headers: {
        'Content-Type': 'application/json'
    }
}

@Injectable()
export class BussinessService {
    subscriptions: Subscription[] = [];
    bussiness$ubject: Subject<any> = new Subject();
    selectedBussiness: Bussiness | null = null;

    apiUrl = environment.apiUrl;

    http = inject(HttpClient)

    getCurrentSelectedBussiness() {
        const bussinessInMemory = sessionStorage.getItem('selectedBussiness');

        if (bussinessInMemory != null) {
            this.selectedBussiness = JSON.parse(bussinessInMemory);
            return this.selectedBussiness;
        }
        this.selectedBussiness = null;
        return this.selectedBussiness;
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
