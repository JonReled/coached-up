import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component'; 
import { MatTabsModule } from '@angular/material/tabs';
import { DietPageComponent } from './pages/diet-page/diet-page.component';
import { ProgramPageComponent } from './pages/program-page/program-page.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { CoachPageComponent } from './pages/coach-page/coach-page.component';
import { CoachOverviewComponent } from './pages/home-page/components/coach-overview/coach-overview.component';
import { WrapperComponent } from './shared/components/wrapper/wrapper.component';
import { DietOverviewComponent } from './pages/home-page/components/diet-overview/diet-overview.component';
import { ProgramOverviewComponent } from './pages/home-page/components/program-overview/program-overview.component';
import { ProgramWeekViewComponent } from './pages/home-page/components/program-week-view/program-week-view.component';
import { ProgramDayViewComponent } from './pages/home-page/components/program-week-view/components/program-day-view/program-day-view.component';
import { MatButtonModule } from '@angular/material/button';
import { TimestampToTimeAgoPipe } from './shared/pipes/timestamp-to-time-ago.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    DietPageComponent,
    ProgramPageComponent,
    StatsPageComponent,
    CoachPageComponent,
    CoachOverviewComponent,
    WrapperComponent,
    DietOverviewComponent,
    ProgramOverviewComponent,
    ProgramWeekViewComponent,
    ProgramDayViewComponent,
    TimestampToTimeAgoPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatTabsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
