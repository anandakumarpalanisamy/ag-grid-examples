import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-simple-row-grouping',
  templateUrl: './simple-row-grouping.component.html',
  styleUrls: ['./simple-row-grouping.component.css']
})
export class SimpleRowGroupingComponent {

  private gridApi;
  private gridColumnApi;
  rowData: any[];
  columnDefs;

  constructor(private http: Http) {
    this.columnDefs = [
      {
        headerName: 'Country',
        field: 'country',
        width: 120,
        rowGroup: true
      },
      {
        headerName: 'Year',
        field: 'year',
        width: 90,
        rowGroup: true
      },
      {
        headerName: 'Sport',
        field: 'sport',
        width: 110
      },
      {
        headerName: 'Athlete',
        field: 'athlete',
        width: 200
      },
      {
        headerName: 'Gold',
        field: 'gold',
        width: 100
      },
      {
        headerName: 'Silver',
        field: 'silver',
        width: 100
      },
      {
        headerName: 'Bronze',
        field: 'bronze',
        width: 100
      },
      {
        headerName: 'Age',
        field: 'age',
        width: 90
      },
      {
        headerName: 'Date',
        field: 'date',
        width: 110
      }
    ];
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
      .get('assets/data/olympicWinnersSmall.json')
      .subscribe(response => {
        this.rowData = response.json();
    });
  }
}
