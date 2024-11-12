import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FomularioComponent } from './fomulario/fomulario.component';
import { InformacionComponent } from './informacion/informacion.component';
import {ReactiveFormsModule} from "@angular/forms";

import {FormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FomularioComponent,
    InformacionComponent,
    ModalComponent,
    PokemonDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [
    provideHttpClient(
      withInterceptorsFromDi()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
