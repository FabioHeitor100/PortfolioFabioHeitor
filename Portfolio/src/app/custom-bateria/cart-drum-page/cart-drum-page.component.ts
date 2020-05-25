import { Component, OnInit } from '@angular/core';

import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cart-drum-page',
  templateUrl: './cart-drum-page.component.html',
  styleUrls: ['./cart-drum-page.component.css']
})
export class CartDrumPageComponent implements OnInit {


  displayedColumns: string[] = ['Color','Material']; // 'Material', 'Disposition', 'Stick Type', 'Brand'];
  dataSource;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log(this.data);
    console.log(this.data.data[0].drumColorOrder);
    // this.dataSource =  new MatTableDataSource(this.data);

    this.dataSource = this.data.data;
    console.log('ola');
    console.log(this.dataSource);
    console.log('ola');
    console.log(this.dataSource[0]);
    console.log(this.dataSource[0].drumColorOrder);


  }




}
