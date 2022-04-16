import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachPageComponent } from './pages/coach-page/coach-page.component';
import { DietPageComponent } from './pages/diet-page/diet-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProgramPageComponent } from './pages/program-page/program-page.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'coach', component: CoachPageComponent },
  { path: 'diet', component: DietPageComponent },
  { path: 'program', component: ProgramPageComponent },
  { path: 'stats', component: StatsPageComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }