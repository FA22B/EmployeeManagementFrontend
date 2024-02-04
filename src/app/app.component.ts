import { Component } from '@angular/core';
import {NavigationStart, Router, RouterOutlet} from '@angular/router';
import { HistoryService } from './history.service';
import {CommonModule} from "@angular/common";
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = "employeeFrontendStarter";

  constructor(private historyService: HistoryService, private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        historyService.storePreviousRoute();
      }
    });
  }
}
