import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';


import { AppComponent } from './app.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { ExamenComponent } from './components/examen/examen.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';

import { PreguntaService } from './services/pregunta.service';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    PreguntaComponent,
    ExamenComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    PreguntaService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
