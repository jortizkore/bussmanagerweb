import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SharedModalComponent } from "../components/shared-modal/shared-modal.component";

@Injectable()
export class ModalService {
    dialogRef: any;
    constructor(private dialog: MatDialog) {

    }

    openSharedModal(title: string, component: any, okFunction?: any, okButtonText?: string, cancelButtonText?: string) {
        this.dialogRef = this.dialog.open(SharedModalComponent, {
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

    setOkFunction(fn: any) {
        this.dialogRef.daya.okFunction = fn;
    }
}
