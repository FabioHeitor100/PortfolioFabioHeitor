import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drum-stick-type',
  templateUrl: './drum-stick-type.component.html',
  styleUrls: ['./drum-stick-type.component.css']
})
export class DrumStickTypeComponent implements OnInit {

  @Output() callToChangeToStickToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToBrushesToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToMalletsToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToRodsToParent : EventEmitter<any> = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
  }

  changeToStick(){
    this.callToChangeToStickToParent.emit();
  }
  changeToBrushes(){
    this.callToChangeToBrushesToParent.emit();
  }
  changeToMallets(){
    this.callToChangeToMalletsToParent.emit();
  }
  changeToRods(){
    this.callToChangeToRodsToParent.emit();
  }

}
