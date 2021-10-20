import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ListStarshipsComponent } from './list-starships/list-starships.component';
import { HomeComponent } from './home/home.component';
import { SwapiRoutingModule } from './swapi-routing.module';

@NgModule({
  declarations: [ListPeopleComponent, ListStarshipsComponent, HomeComponent],
  imports: [CommonModule, SwapiRoutingModule],
})
export class SwApiModule {}