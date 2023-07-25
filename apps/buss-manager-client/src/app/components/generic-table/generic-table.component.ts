import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'bmw-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent {
  @Input() columnDef: any[] = [];
  @Input() data: any[] = [];
  tableData: MatTableDataSource<any> = new MatTableDataSource<any>;
  pageSizeOptions = [5, 10, 20]
  columns: any[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router) {
    // TODO I need to do msomething here to avoid lint messages

  }

  ngAfterViewInit() {
    this.tableData = new MatTableDataSource<any>(this.data);
    this.tableData.paginator = this.paginator;
    this.columns = this.columnDef.map(cd => cd.columnDef); // todo explicar esta magia a starlin
  }


  triggerFunction(f: any, data: any, redirectLink?: string) {
    f(data); // this function should always load data to update
    if (redirectLink)
      this.router.navigate([redirectLink]);
  }

}
