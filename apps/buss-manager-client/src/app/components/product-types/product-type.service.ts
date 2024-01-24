import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { maintenanceService } from "../../shared/models/maintenance-service";
import { Subscription, Subject } from "rxjs";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from "apps/buss-manager-client/src/environments/environment";
import { ProductType } from "../../shared/models/bussiness.model";

@Injectable({
    providedIn: 'root'
})
export class ProductTypeService implements maintenanceService {
    constructor(private http: HttpClient) { }
    apiUrl = environment.apiUrl;

    subscriptions: Subscription[] = [];
    public $ubject: Subject<any> = new Subject();
    selected: any;

    getAll() {
        this.subscriptions.push(
            this.http.get(`${this.apiUrl}product-type/product-types`).subscribe(res => {
                if (res) {
                    this.$ubject.next(res);
                }
            })
        )
    }

    get(id: number) {
        this.subscriptions.push(
            this.http.get(`${this.apiUrl}product-type/product-type?id=${id}`).subscribe(res => {
                if (res) {
                    this.$ubject.next(res);
                }
            })
        )
    }

    save(item: ProductType) {
        if (!item.id) {
            this.http.post(`${this.apiUrl}product-type/product-type`, JSON.stringify(item), environment.httpOptions).subscribe(
                res => {
                    if (res) {
                        console.log(res);
                        this.getAll();
                    }
                }, (error) => {
                    console.log(error);
                }
            )
        } else {
            this.http.patch(`${this.apiUrl}product-type/product-type`, JSON.stringify(item), environment.httpOptions).subscribe(
                res => {
                    if (res) {
                        console.log(res);
                        this.getAll();
                    }
                }, (error) => {
                    console.log(error);
                }
            )
        }
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}product-type/product-type/${id}`);
    }

    clearSubscriptions(): void {
        throw new Error("Method not implemented.");
    }



}