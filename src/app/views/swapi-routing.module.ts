import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListStarshipsComponent } from './list-starships/list-starships.component';
import { ListPeopleComponent } from './list-people/list-people.component';

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
        path: '',
      },
      {
        path: '**',
        redirectTo: 'list',
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
