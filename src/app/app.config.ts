import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';

import locales  from '@angular/common/locales/es-MX'
import localfr  from '@angular/common/locales/fr'
import { Local } from './services/local';



registerLocaleData(locales,'es')
registerLocaleData(localfr,'fr')


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),

    {
      provide: LOCALE_ID,
      // useValue:'fr'
      deps: [Local],
      useFactory: ( localService: Local )=> localService.getLocale
    }


  ]
};
