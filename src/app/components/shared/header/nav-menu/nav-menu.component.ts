import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [ NgbNavModule, RouterLink, NgbCollapseModule, NgbDropdownModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {

  isMenuCollapsed: boolean = true;
  activeLink: number = 1;


  toggleMenu(isMenuCollapsed: boolean) {
    this.isMenuCollapsed = isMenuCollapsed;
  }

}
