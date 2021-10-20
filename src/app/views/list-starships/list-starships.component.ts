import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/starship';
import { StarShipService } from 'src/app/services/star-ship.service';

@Component({
  selector: 'app-list-starships',
  templateUrl: './list-starships.component.html',
  styleUrls: ['./list-starships.component.css'],
})
export class ListStarshipsComponent implements OnInit {
  starship: Starship[] = [];
  title: string;
  names: never[];

  constructor(private _service: StarShipService) {
    this.title = 'Naves';
    // this.starship = new starship('', '', '', '', '', '');
    this.names = [];
  }

  ngOnInit() {
    this._service.getStarShip().subscribe(
      (response) => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.starship = res.results; //Accede al arreglo 'results' que esta dentro de 'res' y lo guarda en starships
        console.log('res', res.results);
        this.getNames(); //Crea un arreglo con el nombre de las naves
        // this.getStarship(2); //Por defecto inicia el componente con la nave que esta en la posicion '2' del arreglo
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getNames() {
    throw new Error('Method not implemented.');
  }

  // getStarship(id: number) {
  //   try {
  //     //Crea una nueva nave con el índice dado por parametro

  //      this.starship[id].name,
  //       this.starship[id].model,
  //       this.starship[id].manufacturer,
  //       this.starship[id].crew,
  //       this.starship[id].length,
  //       this.starship[id].consumables;
  //   } catch (err) {
  //     console.log(err);
  //   }
}
