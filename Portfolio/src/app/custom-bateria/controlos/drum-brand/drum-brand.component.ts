import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drum-brand',
  templateUrl: './drum-brand.component.html',
  styleUrls: ['./drum-brand.component.css']
})
export class DrumBrandComponent implements OnInit {


  @Output() callToChangeToLudwigToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToPearlToParent : EventEmitter<any> = new EventEmitter<any>();
  @Output() callToChangeToYamahaToParent : EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }


  changeToLudwig(){
    this.callToChangeToLudwigToParent.emit();
  }
  changeToPearl(){
    this.callToChangeToPearlToParent.emit();
  }
  changeToYamaha(){
    this.callToChangeToYamahaToParent.emit();
  }

}
