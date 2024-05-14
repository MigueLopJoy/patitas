import { Component } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ContactSocialComponent } from './contact-social/contact-social.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenuComponent, ContactSocialComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
