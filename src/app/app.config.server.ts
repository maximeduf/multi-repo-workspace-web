import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideServerRoutesConfig(serverRoutes),
    provideClientHydration()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
