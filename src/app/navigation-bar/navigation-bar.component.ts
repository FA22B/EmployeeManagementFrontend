import { Component, Input } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  standalone: true
})
export class NavigationBarComponent {
  @Input() itemsShown = false;
  expanded = false;

  constructor(private keycloakService: KeycloakService) {}

  /**
   * Toggles the navigation bar expanded flag
   */
  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  /**
   * Logs the user with the service of keycloak out
   */
  logout() {
    this.keycloakService.logout();
  }
}
