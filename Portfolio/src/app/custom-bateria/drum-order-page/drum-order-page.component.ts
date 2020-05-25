import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomDrumOrders} from '../custom-drum-orders';
import {CartDrumPageComponent} from '../cart-drum-page/cart-drum-page.component';

@Component({
  selector: 'app-drum-order-page',
  templateUrl: './drum-order-page.component.html',
  styleUrls: ['./drum-order-page.component.css']
})
export class DrumOrderPageComponent implements OnInit {

  drumColorSelected;
  drumMaterialSeleted;
  drumDispositionSeleted;
  drumStickTypeSelected;
  drumBrandSelected;

  numberOfOrders = 0;
  orderList  = [] ;

  progressBarValueInDrumOrder = 0;

  @Output() resetAll: EventEmitter<any> = new EventEmitter<any>();


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }


   addToCart(){

    this.orderList[this.numberOfOrders] = new CustomDrumOrders(
      this.drumColorSelected, this.drumMaterialSeleted, this.drumDispositionSeleted, this.drumStickTypeSelected, this.drumBrandSelected);
    this.numberOfOrders = this.numberOfOrders +1;
    this.resetAll.emit();

    this.drumColorSelected = '';
    this.drumMaterialSeleted = '';
    this.drumDispositionSeleted = '';
    this.drumStickTypeSelected = '';
    this.drumBrandSelected = '';

   }

   showCart(){
    console.log(this.orderList);
    this.dialog.open(CartDrumPageComponent,{
       height: '1300px',
       width: '1300px',
       data: { data: this.orderList}
     });
   }




}
