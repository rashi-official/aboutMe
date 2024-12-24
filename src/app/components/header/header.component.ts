import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isNavbarOpen: boolean = false; // Tracks the open/close state of the navbar

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen; // Toggle the navbar state
  }
}
