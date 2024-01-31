import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private router: Router) {}

  private readonly previousUrlKey = 'previous-url';
  private readonly routeStoringKey = 'avoid-route';
  private readonly defaultRoute = '/';
  private readonly contentBlacklist: string[] = ['saveSuccess=true'];

  public goBack(): void {
    let routes: string[];
    const routeString: string | null = window.localStorage.getItem(this.previousUrlKey);
    let lastRoute;
    this.setRoutesStored(true);
    if (routeString != null) {
      routes = JSON.parse(routeString);
      lastRoute = this.getLastRoute(routes);
      routes.pop();
      window.localStorage.setItem(this.previousUrlKey, JSON.stringify(routes));
      this.router.navigateByUrl(lastRoute);
    } else {
      this.router.navigateByUrl('/');
    }
  }

  private setRoutesStored(routesStored: boolean) {
    window.localStorage.setItem(this.routeStoringKey, String(routesStored));
  }

  private getLastRoute(routes: string[]): string {
    return routes.slice(-1)[0];
  }
}
