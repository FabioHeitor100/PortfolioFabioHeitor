import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { CustomBateriaComponent } from './custom-bateria/custom-bateria.component';
import { APIComponent } from './api/api.component';
import { BolosDaAndreiaComponent } from './bolos-da-andreia/bolos-da-andreia.component';
import { ShopCartComponent } from './bolos-da-andreia/shop-cart/shop-cart.component';
import { ShopCartLogoComponent } from './bolos-da-andreia/shop-cart/shop-cart-logo/shop-cart-logo.component';
import { ParteVisualDaImagemComponent } from './custom-bateria/parte-visual-da-imagem/parte-visual-da-imagem.component';
import { ControlosComponent } from './custom-bateria/controlos/controlos.component';
import { MaterialComponent } from './custom-bateria/controlos/material/material.component';
import { DrumDispositionComponent } from './custom-bateria/controlos/drum-disposition/drum-disposition.component';
import { DrumStickTypeComponent } from './custom-bateria/controlos/drum-stick-type/drum-stick-type.component';
import { DrumColorComponent } from './custom-bateria/controlos/drum-color/drum-color.component';
import { DrumBrandComponent } from './custom-bateria/controlos/drum-brand/drum-brand.component';
import { DrumOrderPageComponent } from './custom-bateria/drum-order-page/drum-order-page.component';
import { CustomSelectTabComponent } from './custom-bateria/Components/custom-select-tab/custom-select-tab.component';
import { DialogCartComponent } from './custom-bateria/Components/dialog-cart/dialog-cart.component';
import { CartDrumPageComponent } from './custom-bateria/cart-drum-page/cart-drum-page.component';
import { SideNavComponent } from './custom-bateria/Components/side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    LoginComponent,
    CustomBateriaComponent,
    APIComponent,
    BolosDaAndreiaComponent,
    ShopCartComponent,
    ShopCartLogoComponent,
    ParteVisualDaImagemComponent,
    ControlosComponent,
    MaterialComponent,
    DrumDispositionComponent,
    DrumStickTypeComponent,
    DrumColorComponent,
    DrumBrandComponent,
    DrumOrderPageComponent,
    CustomSelectTabComponent,
    DialogCartComponent,
    CartDrumPageComponent,
    SideNavComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: 'frontPage', component: FrontPageComponent},
      { path: 'customBateria', component: CustomBateriaComponent

          },
      { path: 'api', component: APIComponent}


    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressBarModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
