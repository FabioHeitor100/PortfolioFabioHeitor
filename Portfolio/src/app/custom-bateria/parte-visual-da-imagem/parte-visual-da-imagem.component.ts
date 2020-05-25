import {Component, Input, OnInit} from '@angular/core';
import {CustomBateriaComponent} from '../custom-bateria.component';
import {ImageDisplay} from '../image-display.service.service';

@Component({
  selector: 'app-parte-visual-da-imagem',
  templateUrl: './parte-visual-da-imagem.component.html',
  styleUrls: ['./parte-visual-da-imagem.component.css']
})

export class ParteVisualDaImagemComponent implements OnInit {

  // @Input() bluDrumClourSrc;


  @Input('drumFrontImage') drumFrontImage = `../../../assets/Drums Images/20559.jpg`;



  constructor(private imageDisplay: ImageDisplay) { }


  ngOnInit(): void {
    this.drumFrontImage = `../../../assets/Drums Images/20559.jpg`;
  }












}
