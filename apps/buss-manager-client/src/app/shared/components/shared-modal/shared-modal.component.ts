import { CommonModule } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

interface SharedModalData {
    title: string,
    component: any,
    okFunction: any,
    okButtonText?: string,
    cancelButtonText?: string
}

@Component({
    templateUrl: './shared-modal.component.html',
    styleUrls: ['./shared-modal.component.scss'],
    standalone: true,
    imports: [CommonModule, MatButtonModule],
})
export class SharedModalComponent implements OnInit {
    currentComponent: any;
    constructor(
        private dialogRef: MatDialogRef<SharedModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: SharedModalData) { }
    ngOnInit(): void {
        this.currentComponent = {
            value: this.data.component
        }
    }


    closeDialog() {
        this.dialogRef.close();
    }

    executeCallBack() {
        this.data.okFunction();
        this.closeDialog();
    }

}