import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drum-disposition',
  templateUrl: './drum-disposition.component.html',
  styleUrls: ['./drum-disposition.component.css']
})
export class DrumDispositionComponent implements OnInit {

  @Output() callToChangeToTwoUpOneDownToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToDoubleBassToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToFusionTOParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToClassicToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToJazzToParent : EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  changeToTwoUpOneDown(){
    this.callToChangeToTwoUpOneDownToParent.emit();
  }
  changeToDoubleBassDrum(){
    this.callToChangeToDoubleBassToParent.emit();
  }
  changeToFusion(){
    this.callToChangeToFusionTOParent.emit();
  }
  changeToClassicRock(){
    this.callToChangeToClassicToParent.emit();
  }
  changeToJazz(){
    console.log('ola5');
    this.callToChangeToJazzToParent.emit();
  }

}
