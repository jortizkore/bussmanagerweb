import { Bussiness } from "./bussiness.model";

export const BussinessColumns = [
    {
        header: 'Company Name',
        columnDef: 'bussinessName',
        cell: (row: Bussiness) => `${row.bussinessName}`
    },
    {
        header: 'Company Phone',
        columnDef: 'phoneNumber',
        cell: (row: Bussiness) => `${row.phoneNumber ? row.phoneNumber : '-'}`
    },
    {
        header: 'Company Address',
        columnDef: 'address',
        cell: (row: Bussiness) => `${row.address ? row.address : '-'}`
    },
    {
        header: 'Status',
        columnDef: 'isActive',
        cell: (row: Bussiness) => `${row.isActive ? 'Active' : 'Deactivated'}`
    }, {
        header: 'Update',
        columnDef: 'update',
        cell: (row: Bussiness) => {
            //const formControl = new FormControl(); // probably this is not needed
            const prepareUpdateData = (row: Bussiness) => {
                localStorage.setItem('bussinessToUpdate', JSON.stringify(row));
            }
            return {
                // formControl: formControl,
                formControlType: 'icon-button',
                redirectLink: 'register-bussiness',
                callBack: prepareUpdateData
            }
        }
    },
    {
        header: 'Action',
        columnDef: 'delete',
        cell: (row: Bussiness) => {
            //const formControl = new FormControl(); // probably this is not needed
            const prepareDeleteData = (row: Bussiness) => {
                localStorage.setItem('bussinessToDelete', JSON.stringify(row));
            }
            const icon = row.isActive ? 'cancel' : 'check';
            return {
                // formControl: formControl,
                icon: icon,
                redirectLink: 'register-bussiness',
                callBack: prepareDeleteData
            }
        }
    }
]