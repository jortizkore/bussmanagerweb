import { ProductType } from "../../shared/models/bussiness.model";
import { ProductTypeService } from "./product-type.service";


export const productTypeColumns = [
    {
        header: 'Select',
        columnDef: 'check',
        cell: (row: ProductType) => `${row}`
    },
    {
        header: 'Id',
        columnDef: 'id',
        cell: (row: ProductType) => `${row.id}`
    },
    {
        header: 'Product Type',
        columnDef: 'typeName',
        cell: (row: ProductType) => `${row.typeName}`
    },
    // {
    //     header: 'Actions',
    //     columnDef: 'maintenance',
    //     cell: (row: ProductType) => {


    //         const edit = () => {
    //             alert('edit');
    //             //return row;
    //         }
    //         const remove = () => {
    //             alert('delete');
    //             //service.delete(row.id);
    //         }

    //         return {
    //             editFn: edit,
    //             removeFn: remove
    //         }
    //     }
    // }
]