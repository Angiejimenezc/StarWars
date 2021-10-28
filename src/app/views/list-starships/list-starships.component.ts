import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
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

  showButton = false;
  private scrollHeight = 400;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _service: StarShipService,
    private router: Router
  ) {}

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

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > this.scrollHeight;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
  // onScrollDown(): void {
  //   console.log('Down');
  // }
}
