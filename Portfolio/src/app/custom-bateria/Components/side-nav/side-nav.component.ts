import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomBateriaComponent} from '../../custom-bateria.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  opened = false;

  pageTittle = 'PORTFOLIO';




  constructor() { }

  ngOnInit(): void {
  }

  openSideNAv() {
    this.opened = true;
  }

  changeTittleFrontPage(){
    this.pageTittle = 'PORTFOLIO - Fábio Heitor';
  }

  changeTittleCustomDrum(){
    this.pageTittle = 'Drum Costumization';
  }


}
