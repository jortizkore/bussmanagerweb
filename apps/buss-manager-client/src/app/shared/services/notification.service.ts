import { Injectable } from "@angular/core";
import Swal from 'sweetalert2'

@Injectable()
export class NotificationService {

    showAlertMessage(title: string, message: string, confirmButtonText = null) {
        Swal.fire({
            title: title,
            text: message,
            icon: 'warning',
            confirmButtonText: confirmButtonText ? confirmButtonText : 'Ok'
        })
    }

    showErrorMessage(title: string, message: string, confirmButtonText = null) {
        Swal.fire({
            title: title,
            text: message,
            icon: 'error',
            confirmButtonText: confirmButtonText ? confirmButtonText : 'Ok'
        })
    }

    showInfoMessage(title: string, message: string, confirmButtonText = null) {
        Swal.fire({
            title: title,
            text: message,
            icon: 'info',
            confirmButtonText: confirmButtonText ? confirmButtonText : 'Ok'
        })
    }

    showQuestion(title: string, message: string, okCallBack: any) {
        Swal.fire({
            title: title,
            text: message,
            icon: 'question',
            confirmButtonText: 'Proceed',
            showConfirmButton: true,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                okCallBack();
            } else if (result.dismiss) {
                Swal.fire({
                    title: title,
                    text: 'Operation cancelled',
                    confirmButtonText: 'Ok'
                });
            }
        })
    }
} 