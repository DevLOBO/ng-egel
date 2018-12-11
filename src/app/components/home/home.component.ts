import { Component, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../services/data.service';
import { Datos } from '../../models/datos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  datos: Datos[] = null;
  total: number = 0;
  displayedColumns = ['area', 'reactivos', 'porcentaje'];
  dataSource: MatTableDataSource<Datos>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dataService: DataService
  ) {
    this.datos = this.dataService.getDatos();
    this.dataSource = new MatTableDataSource(this.datos);
    this.dataSource.sort = this.sort;
    this.total = this.datos.map(d => d.reactivos).reduce((acc, value) => acc + value, 0);
  }

}
