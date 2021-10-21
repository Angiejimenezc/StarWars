import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/people';
import { StarShipService } from 'src/app/services/star-ship.service';

@Component({
  selector: 'app-star-ship',
  templateUrl: './star-ship.component.html',
  styleUrls: ['./star-ship.component.css'],
})
export class StarShipComponent implements OnInit {
  ship: Result[] = [];

  constructor(private _service: StarShipService, private router: Router) {}

  ngOnInit(): void {
    this._service.getStarshipsId('id').subscribe(
      (response) => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.ship = res.results; //Accede al arreglo 'results' que esta dentro de 'res' y lo guarda en starships
        console.log('resId', res.results);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
