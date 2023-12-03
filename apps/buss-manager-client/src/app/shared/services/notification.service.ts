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

    showQuestion(title: string, message: string, confirmButtonText = null) {
        Swal.fire({
            title: title,
            text: message,
            icon: 'question',
            confirmButtonText: confirmButtonText ? confirmButtonText : 'Ok',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                return true;
            } else {
                Swal.fire({
                    title: title,
                    text: 'Operation cancelled',
                    confirmButtonText: 'Ok'
                });
                return false;
            }
        })
    }
} 