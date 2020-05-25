import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ParteVisualDaImagemComponent} from './parte-visual-da-imagem/parte-visual-da-imagem.component';
import {MaterialComponent} from './controlos/material/material.component';
import {DrumOrderPageComponent} from './drum-order-page/drum-order-page.component';

@Component({
  selector: 'app-custom-bateria',
  templateUrl: './custom-bateria.component.html',
  styleUrls: ['./custom-bateria.component.css']
})
export class CustomBateriaComponent implements OnInit {

  @ViewChild(ParteVisualDaImagemComponent) drumVisualImageComponent ;
  @ViewChild(DrumOrderPageComponent) drumOrderPage;
  drumConfiguration = {
    drumColor: 'blue'
  };

  wasclickedvalueColor = false;
  wasclickedvalueMaterial = false;
  wasclickedvalueDisposition = false;
  wasclickedvalueStickType = false;
  wasclickedvalueBrand = false;

  progressBarValue;

  constructor() { }

  ngOnInit(): void {
  }


  callToChangeColorToBlueToChild() {
    this.drumVisualImageComponent.drumFrontImage = '../../../assets/Drums Images/Blue Drum.png';
    this.drumOrderPage.drumColorSelected = 'Blue';
    if (this.wasclickedvalueColor === false){
      this.proguessBarUp();
    }

    this.wasclickedvalueColor = true;
  }

  callToChangeColorToYellowToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../../../assets/Drums Images/Yellow Drum.png';
    this.drumOrderPage.drumColorSelected = 'Yellow';
    if (this.wasclickedvalueColor === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueColor = true;
  }

  callToChangeColorToPinkToChild() {
    this.drumVisualImageComponent.drumFrontImage = '../../../../assets/Drums Images/Pink Drum.png';
    this.drumOrderPage.drumColorSelected = 'Pink';
    if (this.wasclickedvalueColor === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueColor = true;
  }

  callToChangeColorToRedToChild() {
    this.drumVisualImageComponent.drumFrontImage = '../../../../assets/Drums Images/Red Drum.png';
    this.drumOrderPage.drumColorSelected = 'Red';
    if (this.wasclickedvalueColor === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueColor = true;
  }

  callToChangeColorToGreenToChild() {
    this.drumVisualImageComponent.drumFrontImage = '../../../../assets/Drums Images/Green Drum.png';
    this.drumOrderPage.drumColorSelected = 'Green';
    if (this.wasclickedvalueColor === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueColor = true;
  }

  callToChangeColorToGreyToChild() {
    this.drumVisualImageComponent.drumFrontImage = '../../../../assets/Drums Images/Grey Drum.jpg';
    this.drumOrderPage.drumColorSelected = 'Grey';
    if (this.wasclickedvalueColor === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueColor = true;
  }

  callToChangeMaterialToWoodToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Material/Wood.jpg';
    this.drumOrderPage.drumMaterialSeleted = 'Wood';
    if (this.wasclickedvalueMaterial === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueMaterial = true;
  }

  callToChangeMaterialToSteelToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Material/Steel.jpg';
    this.drumOrderPage.drumMaterialSeleted = 'Steel';
    if (this.wasclickedvalueMaterial === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueMaterial = true;
  }

  callToChangeMaterialToBrassToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Material/Brass.jpg';
    this.drumOrderPage.drumMaterialSeleted = 'Brass';
    if (this.wasclickedvalueMaterial === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueMaterial = true;
  }

  callToChangeMaterialToAluminiumToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Material/Aluminium.jpg';
    this.drumOrderPage.drumMaterialSeleted = 'Aluminium';
    if (this.wasclickedvalueMaterial === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueMaterial = true;
  }

  callToChangeToTwoUpOneDownToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../../../assets/Drum Disposition/Two-Up-One-Down.png';
    this.drumOrderPage.drumDispositionSeleted = 'Two Up One Down';
    if (this.wasclickedvalueDisposition === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueDisposition = true;
  }

  callToChangeToDoubleBassToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../../../assets/Drum Disposition/Double-Bass-Drum-Kit-Plus-Extra.png';
    this.drumOrderPage.drumDispositionSeleted = 'Double Bass';
    if (this.wasclickedvalueDisposition === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueDisposition = true;
  }

  callToChangeToFusionToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../../../assets/Drum Disposition/Fusion-Kit.png';
    this.drumOrderPage.drumDispositionSeleted = 'Fusion';
    if (this.wasclickedvalueDisposition === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueDisposition = true;
  }

  callToChangeToClassicToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../../../assets/Drum Disposition/Classic-Rock-Kit.png';
    this.drumOrderPage.drumDispositionSeleted = 'Classic';
    if (this.wasclickedvalueDisposition === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueDisposition = true;
  }

  callToChangeToJazzToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../../../assets/Drum Disposition/Jazz-Kit.png';
    this.drumOrderPage.drumDispositionSeleted = 'Jazz';
    if (this.wasclickedvalueDisposition === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueDisposition = true;
  }

  callToChangeToStickTypeToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Stick Type/nylon-drumsticks.jpg';
    this.drumOrderPage.drumStickTypeSelected = 'Stick';
    if (this.wasclickedvalueStickType === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueStickType = true;
  }

  callToChangeToBrushesToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Stick Type/Brushes.jpg';
    this.drumOrderPage.drumStickTypeSelected = 'Brushes';
    if (this.wasclickedvalueStickType === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueStickType = true;
  }

  callToChangeToMalletsToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Stick Type/Mallets.jpg';
    this.drumOrderPage.drumStickTypeSelected = 'Mallets';
    if (this.wasclickedvalueStickType === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueStickType = true;
  }

  callToChangeToRodsToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Stick Type/Rod.jpg';
    this.drumOrderPage.drumStickTypeSelected = 'Rods';
    if (this.wasclickedvalueStickType === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueStickType = true;
  }


  callToChangeToLudwigTypeToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Brand/Ludwig.jpg';
    this.drumOrderPage.drumBrandSelected = 'Ludwig';
    if (this.wasclickedvalueBrand === false){
      this.proguessBarUp();
    }

    this.wasclickedvalueBrand = true;
  }

  callToChangeToPearlToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Brand/Pearl.png';
    this.drumOrderPage.drumBrandSelected = 'Pearl';
    if (this.wasclickedvalueBrand === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueBrand = true;
  }

  callToChangeToYamahaToChild(){
    this.drumVisualImageComponent.drumFrontImage = '../../assets/Drum Brand/Yamaha.png';
    this.drumOrderPage.drumBrandSelected = 'Yamaha';
    if (this.wasclickedvalueBrand === false){
      this.proguessBarUp();
    }
    this.wasclickedvalueBrand = true;
  }


  proguessBarUp() {

    this.drumOrderPage.progressBarValueInDrumOrder =  this.drumOrderPage.progressBarValueInDrumOrder +20;
    this.progressBarValue = this.drumOrderPage.progressBarValueInDrumOrder;
  }


  callToResetAll() {
    this.wasclickedvalueColor = false;
    this.wasclickedvalueMaterial = false;
    this.wasclickedvalueDisposition = false;
    this.wasclickedvalueStickType = false;
    this.wasclickedvalueBrand = false;
    this.progressBarValue = 0;
    this.drumOrderPage.progressBarValueInDrumOrder = 0;
  }
}
