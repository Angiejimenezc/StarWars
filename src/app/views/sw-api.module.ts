import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ListStarshipsComponent } from './list-starships/list-starships.component';
import { HomeComponent } from './home/home.component';
import { SwapiRoutingModule } from './swapi-routing.module';
import { StarShipComponent } from './star-ship/star-ship.component';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

@NgModule({
  declarations: [ListPeopleComponent, ListStarshipsComponent, HomeComponent, StarShipComponent, FilmsComponent, PlanetsComponent, VehiclesComponent],
  imports: [CommonModule, SwapiRoutingModule],
})
export class SwApiModule {}
