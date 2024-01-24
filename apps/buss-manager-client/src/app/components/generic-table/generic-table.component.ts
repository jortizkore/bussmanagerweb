import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { multicast } from 'rxjs';

@Component({
  selector: 'bmw-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent {
  @Input() columnDef: any[] = [];
  @Input() data: any[] = [];
  @Input() MultiSelect = false;
  @Output() dataSelected = new EventEmitter<any>();
  //@Input() showSelectCol = false;

  tableData: MatTableDataSource<any> = new MatTableDataSource<any>;
  pageSizeOptions = [5, 10, 20]
  columns: any[] = [];


  selection = new SelectionModel<any>(this.MultiSelect, []);
  displayedColumns: string[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(private router: Router, private cdk: ChangeDetectorRef) {
    // TODO I need to do msomething here to avoid lint messages
    this.selection.changed.subscribe(data => {
      this.dataSelected.emit(data.source.selected);
    });
  }


  ngAfterViewInit() {
    this.tableData = new MatTableDataSource<any>(this.data);
    this.tableData.paginator = this.paginator;
    this.columns = this.columns.concat(this.columnDef.map(cd => cd.columnDef)); // TODO: explicar esta magia a starlin 
    console.log(this.data);
    console.log(this.columns);
    this.cdk.detectChanges();
  }


  triggerFunction(f: any, data: any, redirectLink?: string) {
    f(data); // this function should always load data to update
    if (redirectLink)
      this.router.navigate([redirectLink]);
  }

  executeFn(f: any) {
    f();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableData.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.tableData.data.forEach(row => this.selection.select(row));
  }

}
