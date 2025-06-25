import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css'
})
export default class BasicPage {

  nameLower = signal<string>('juan manuel')
  nameUpper = signal<string>('JUAN MANUEL')
  fullName = signal<string>('juAN mAnUel')

}
