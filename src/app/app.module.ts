import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MatTabNav } from '@angular/material/tabs'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component'; 
import { MatTabsModule } from '@angular/material/tabs';
import { DietPageComponent } from './pages/diet-page/diet-page.component';
import { ProgramPageComponent } from './pages/program-page/program-page.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { CoachPageComponent } from './pages/coach-page/coach-page.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    DietPageComponent,
    ProgramPageComponent,
    StatsPageComponent,
    CoachPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
