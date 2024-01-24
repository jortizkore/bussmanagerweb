import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductTypeService } from './product-type.service';
import { NotificationService } from '../../shared/services/notification.service';
import { ProductType } from '../../shared/models/bussiness.model';
import { productTypeColumns } from './product-types.columns';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bmw-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.scss']
})
export class ProductTypesComponent implements OnDestroy {
  form: any;
  prodType: ProductType = {
    id: null,
    typeName: null,
  };
  columns = productTypeColumns;
  data: ProductType[] = [];
  filteredData: ProductType[] = [];
  subscriptions: Subscription[] = [];


  constructor(
    public productTypesService: ProductTypeService,
    private notificationService: NotificationService) {
    this.productTypesService.getAll();
    this.subscriptions.push(
      this.productTypesService.$ubject.subscribe(res => {
        if (res) {
          this.data = res;
        }
      }));
  }

  saveProductType() {
    if (this.prodType.typeName?.trim().length && this.prodType.typeName?.trim().length > 0) {
      this.prodType = this.prodType.id === null ?
        { typeName: this.prodType.typeName, createdAt: this.prodType.createdAt, updatedAt: this.prodType.updatedAt } :
        this.prodType;
      this.productTypesService.save(this.prodType);
    } else {
      this.notificationService.showAlertMessage('Empty field', 'Please fill the product type field');
    }
  }

  async deleteProductType() {
    if (this.prodType.id) {
      await this.productTypesService.delete(this.prodType.id).subscribe((data: any) => {
        if (data) {
          this.notificationService.showInfoMessage('Success', `${data.typeName} removed successfully!`);
          this.productTypesService.getAll();
        }
      });
    }
  }



  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  getFieldErrorMessage = (control: FormControl) => {
    return this.notificationService.checkFieldValidationErrors(control);
  }

  getSelectedProductType = (prodType: ProductType[]) => {

    if (prodType[0]) {
      this.prodType = prodType[0];
    } else {
      this.prodType = {
        id: null,
        typeName: null,
      };
    }
    console.log(this.prodType);
  }

}
