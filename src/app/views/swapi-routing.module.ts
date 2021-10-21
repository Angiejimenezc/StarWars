import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListStarshipsComponent } from './list-starships/list-starships.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { StarShipComponent } from './star-ship/star-ship.component';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list_starships',
        component: ListStarshipsComponent,
      },
      { path: 'list_people', component: ListPeopleComponent },
      {
        path: 'star-ship',
        component: StarShipComponent,
      },
      {
        path: 'films',
        component: FilmsComponent,
      },
      {
        path: 'planets',
        component: PlanetsComponent,
      },
      {
        path: 'vehicles',
        component: VehiclesComponent,
      },
      {
        path: '**',
        redirectTo: 'list_starships',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapiRoutingModule {}
