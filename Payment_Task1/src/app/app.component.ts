import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public router: Router) {}
  isNavbarCollapsed = true;


toggleNavbar() {
  this.isNavbarCollapsed = !this.isNavbarCollapsed;
}

closeNavbar() {
  this.isNavbarCollapsed = true;
}


}
