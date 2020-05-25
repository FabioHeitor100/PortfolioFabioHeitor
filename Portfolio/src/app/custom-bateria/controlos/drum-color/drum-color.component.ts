import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ParteVisualDaImagemComponent} from '../../parte-visual-da-imagem/parte-visual-da-imagem.component';
import {ImageDisplay} from '../../image-display.service.service';
import {CustomDrumOrders} from '../../custom-drum-orders';

@Component({
  selector: 'app-drum-color',
  templateUrl: './drum-color.component.html',
  styleUrls: ['./drum-color.component.css']
})
export class DrumColorComponent implements OnInit {



  @Output() callToChangeColorToBlueToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeColorToYellowToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeColorToPinkToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeColorToRedToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeColorToGreenToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeColorToGreyToParent : EventEmitter<any> = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
  }

  changeToBlue() {
    console.log('funciona');
    this.callToChangeColorToBlueToParent.emit();


  }

  changeToYellow() {
   this.callToChangeColorToYellowToParent.emit();

  }

  changeToPink() {
    this.callToChangeColorToPinkToParent.emit();

  }

  changeToRed() {
    this.callToChangeColorToRedToParent.emit();
  }

  changeToGreen(){
    this.callToChangeColorToGreenToParent.emit();

  }

  changeToGrey(){
    this.callToChangeColorToGreyToParent.emit();
  }


  wasclicked() {

  }


}

