import { Injectable, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export type AviableLocal = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class Local {
  private currentLocale = signal<AviableLocal>('es');
  private isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    if (this.isBrowser) {
      const savedLocale = localStorage.getItem('locale') as AviableLocal | null;
      this.currentLocale.set(savedLocale ?? 'es');
    }
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AviableLocal) {
    if (this.isBrowser) {
      localStorage.setItem('locale', locale);
      this.currentLocale.set(locale);
      window.location.reload(); 
    }
  }
}
