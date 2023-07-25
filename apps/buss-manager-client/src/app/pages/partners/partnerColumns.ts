import { FormControl } from "@angular/forms";
import { Partner } from "./partner.model";


export const PartnerColumns = [
    {
        header: 'Names',
        columnDef: 'names',
        cell: (row: Partner) => `${row.names}`
    },
    {
        header: 'Last Name',
        columnDef: 'lastName',
        cell: (row: Partner) => `${row.lastName}`
    },
    {
        header: 'Phone Number',
        columnDef: 'phoneNumber',
        cell: (row: Partner) => `${row.phoneNumber}`
    },
    {
        header: 'Status',
        columnDef: 'isActive',
        cell: (row: Partner) => `${row.isActive ? 'Active' : 'Deactivated'}`
    },
    {
        header: 'Update',
        columnDef: 'update',
        cell: (row: Partner) => {
            //const formControl = new FormControl(); // probably this is not needed
            const prepareUpdateData = (row: Partner) => {
                localStorage.setItem('partnerToUpdate', JSON.stringify(row));
            }
            return {
                // formControl: formControl,
                formControlType: 'icon-button',
                redirectLink: 'register-partner',
                callBack: prepareUpdateData
            }
        }
    },
    {
        header: 'Action',
        columnDef: 'delete',
        cell: (row: Partner) => {
            //const formControl = new FormControl(); // probably this is not needed
            const prepareDeleteData = (row: Partner) => {
                localStorage.setItem('partnerToDelete', JSON.stringify(row));
            }
            const icon = row.isActive ? 'cancel' : 'check';
            return {
                // formControl: formControl,
                icon: icon,
                redirectLink: 'register-partner',
                callBack: prepareDeleteData
            }
        }
    }
]