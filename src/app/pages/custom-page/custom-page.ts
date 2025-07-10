import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly-pipe';
import { HeroColorPipe } from '../../pipes/hero-color-pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color-pipe';
import { TitleCasePipe } from '@angular/common';
import { CreadorPipe } from '../../pipes/creador-pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, CreadorPipe ],
  templateUrl: './custom-page.html',
  styleUrl: './custom-page.css'
})
export default class CustomPage {

  name = signal('Juan Manuel')

  uppercase = signal(true)

  toggle(){
    this.uppercase.set(!this.uppercase())
  }

  heroes = signal(heroes)

}
