import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css'
})
export default class BasicPage  {



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
}
