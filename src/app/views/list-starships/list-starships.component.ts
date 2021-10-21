import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Starship } from 'src/app/models/starship';
import { StarShipService } from 'src/app/services/star-ship.service';

@Component({
  selector: 'app-list-starships',
  templateUrl: './list-starships.component.html',
  styleUrls: ['./list-starships.component.css'],
})
export class ListStarshipsComponent implements OnInit {
  starship: Starship[] = [];

  constructor(private _service: StarShipService, private router: Router) {}

  ngOnInit() {
    this._service.getStarShip().subscribe(
      (response) => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.starship = res.results; //Accede al arreglo 'results' que esta dentro de 'res' y lo guarda en starships
        console.log('res', res.results);
        //this.getNames(); //Crea un arreglo con el nombre de las naves
        // this.getStarship(2); //Por defecto inicia el componente con la nave que esta en la posicion '2' del arreglo
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
