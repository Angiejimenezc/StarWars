import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'starWars';

  constructor(private router: Router) {}
  logout() {
    // Ir al Backend
    // Usuario
    this.router.navigate(['/auth']);
  }
}
