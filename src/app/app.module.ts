import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games.component';
import { CardComponent } from './components/card/card.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DetailgameComponent } from './components/detailgame/detailgame.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    CardComponent,
    CarritoComponent,
    HeaderComponent,
    HomeComponent,
    DetailgameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
