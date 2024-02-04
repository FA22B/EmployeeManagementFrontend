import {Component} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  standalone: true
})
export class NavigationBarComponent {

  constructor(private keycloakService: KeycloakService) {}

  /**
   * Logs the user with the service of keycloak out
   */
  logout() {
    this.keycloakService.logout();
  }
}
