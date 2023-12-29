import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SharedModalComponent } from "../components/shared-modal/shared-modal.component";

@Injectable()
export class ModalService {
    constructor(private dialog: MatDialog) {

    }

    openSharedModal(title: string, component: any, okFunction: any, okButtonText?: string, cancelButtonText?: string) {
        this.dialog.open(SharedModalComponent, {
            data: {
                title: title,
                component: component,
                okFunction: okFunction,
                okButtonText: okButtonText,
                cancelButtonText: cancelButtonText,
            },
            width: '600px',
            disableClose: true
        });
    }
}
