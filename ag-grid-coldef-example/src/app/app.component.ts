import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private gridApi;
  private gridColumnApi;

  rowData: any[];
  columnDefs;
  defaultColDef;
  defaultColGroupDef;
  columnTypes;

  constructor(private http: Http) {
    this.columnDefs =  [
      {
        headerName: 'Athlete',
        field: 'athlete'
      },
      {
        headerName: 'Sport',
        field: 'sport'
      },
      {
        headerName: 'Age',
        field: 'age',
        type: 'numberColumn'
      },
      {
        headerName: 'Year',
        field: 'year',
        type: 'numberColumn'
      },
      {
        headerName: 'Date',
        field: 'date',
        type: ['dateColumn', 'nonEditableColumn'],
        width: 200
      },
      {
        headerName: 'Medals',
        groupId: 'medalsGroup',
        children: [
          {
            headerName: 'Gold',
            field: 'gold',
            type: 'medalColumn'
          },
          {
            headerName: 'Silver',
            field: 'silver',
            type: 'medalColumn'
          },
          {
            headerName: 'Bronze',
            field: 'bronze',
            type: 'medalColumn'
          }
        ]
      }
    ];

    this.defaultColDef = {
      width: 150,
      editable: true,
      filter: 'agTextColumnFilter'
    };

    this.defaultColGroupDef = {
      marryChildren: true
    };

    this.columnTypes = {
      numberColumn: {
        width: 83,
        filter: 'agNumberColumnFilter'
      },
      medalColumn: {
        width: 100,
        columnGroupShow: 'open',
        suppressFilter: true
      },
      nonEditableColumn: {
        editable: false
      },
      dataColumn: {
        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function(filterLocalDateAtMidnight, cellValue) {
            const dateParts = cellValue.split('/');
            const day = Number(dateParts[2]);
            const month = Number(dateParts[1]) - 1;
            const year = Number(dateParts[0]);
            const cellDate = new Date(day, month, year);
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            } else {
              return 0;
            }
          }
        }
      }
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json')
      .subscribe(response => {
        this.rowData = response.json();
    });
  }
}
