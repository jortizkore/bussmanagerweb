import { Subject, Subscription } from "rxjs";

export interface maintenanceService {

    subscriptions: Subscription[];
    $ubject: Subject<any>;
    selected: any | null;
    apiUrl: string

    get(id: number): void

    save(item: any): void

    delete(id: number): void

    clearSubscriptions(): void

}