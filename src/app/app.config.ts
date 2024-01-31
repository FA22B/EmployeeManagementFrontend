import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(KeycloakAngularModule),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    provideHttpClient()
    ]
};

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://keycloak.szut.dev/auth',
        realm: 'szut',
        clientId: 'employee-management-service-frontend'
      },
      initOptions: {
        checkLoginIframe: false,
      }
    });
}
