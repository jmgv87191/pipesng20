import { Injectable, signal } from '@angular/core';

type AviableLocal = 'es'|'fr'|'en';

@Injectable({
  providedIn: 'root'
})

export class Local {

  private currentLocale = signal< AviableLocal >('es')

  constructor(){}

  get getLocale(){
    return this.currentLocale();
  }

  changeLocale( locale: AviableLocal ){
    this.currentLocale.set(locale)
  }

}
