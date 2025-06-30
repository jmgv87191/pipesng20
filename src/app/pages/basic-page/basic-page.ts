import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, OnInit, signal } from '@angular/core';
import { AviableLocal, Local } from '../../services/local';

@Component({
  selector: 'app-basic-page',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css'
})
export default class BasicPage  {

  localService = inject(Local)
  currentLocale = signal (inject(LOCALE_ID))


  nameLower = signal<string>('juan manuel')
  nameUpper = signal<string>('JUAN MANUEL')
  fullName = signal<string>('juAN mAnUel')

  customDate = signal<Date>( new Date() )

  tickingDateEffect = effect((onCleanup)=>{
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    }, 1000);
    
      onCleanup(()=>{
        clearInterval(interval)
      })
  })


  changeLocale(locale: AviableLocal){
    console.log(locale)
    this.localService.changeLocale(locale)
  }

}
