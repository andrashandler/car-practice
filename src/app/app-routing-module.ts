import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CarList } from './components/car-list/car-list';
import { CarDetails } from './components/car-details/car-details';
import { PageNotFound } from './components/page-not-found/page-not-found';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'cars', component: CarList},
  {path: 'cars/:id', component: CarDetails},
  {path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
