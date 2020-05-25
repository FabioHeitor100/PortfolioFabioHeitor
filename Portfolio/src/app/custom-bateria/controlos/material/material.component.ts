import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  @Output() callToChangeToWoodToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToSteelToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToBrassToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToAluminiumToParent : EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }



  changeToWood(){
  this.callToChangeToWoodToParent.emit();
  }
  changeToSteel(){
    this.callToChangeToSteelToParent.emit();
  }
  changeToBrass(){
    this.callToChangeToBrassToParent.emit();
  }
  changeToAluminium(){
    this.callToChangeToAluminiumToParent.emit();
  }



}
