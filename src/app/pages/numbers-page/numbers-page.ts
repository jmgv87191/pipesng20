import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './numbers-page.html',
  styleUrl: './numbers-page.css'
})
export default class NumbersPage {
  nameLower = signal<string>('juan manuel')
  nameUpper = signal<string>('JUAN MANUEL')
  fullName = signal<string>('juAN mAnUel')


  totalSells = signal<number>(22312421334.5567)
  percent = signal<number>(0.4856)
} 
