import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlanetComponent } from './pages/planet/planet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planet/:id', component: PlanetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
