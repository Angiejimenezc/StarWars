import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people';
import { StarPeopleService } from 'src/app/services/star-people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css'],
})
export class ListPeopleComponent implements OnInit {
  public starpeople: any = [];
  public person: any = [];
  public names: Array<string>;
  //icons

  constructor(private _service: StarPeopleService) {
    // this.title = 'Personajes';
    // this.starperson = new Starperson('', '', '', '', '', '');
    this.names = [];
  }

  ngOnInit() {
    this._service.getStarPeople().subscribe(
      (response) => {
        let res: any;
        res = response;
        this.starpeople = res.results;
        console.log('resp', res.results);
        // this.getNames();
        // this.getStarpeople(2);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // getStarpeople(id: number) {
  //   try {
  //     this.starperson = new Starpeople(
  //       this.starpeople[id].name,
  //       this.starpeople[id].height,
  //       this.starpeople[id].skin_color,
  //       this.starpeople[id].birth_year,
  //       this.starpeople[id].mass,
  //       this.starpeople[id].gender
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // onFindStarpeople(name: string) {
  //   let index: number = this.names.indexOf(name);
  //   if (index === -1) {
  //     alert('People not found...');
  //   } else {
  //     this.getStarpeople(index);
  //   }
  // }

  // getNames() {
  //   for (let i in this.starpeople) {
  //     this.names.push(this.starpeople[i].name);
  //   }
}
