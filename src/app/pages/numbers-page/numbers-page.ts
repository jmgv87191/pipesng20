import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [CommonModule],
  templateUrl: './numbers-page.html',
  styleUrl: './numbers-page.css'
})
export default class NumbersPage {


  totalSells = signal<number>(22312421334.5567)
  percent = signal<number>(0.4856)
} 
