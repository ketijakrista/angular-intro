import { Cat } from './../models/cat.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {
  cats = ['Muris', 'Pīkols', 'Pūciņa'];
  newCatname = '';

  addCat(): void {
    this.cats.push(this.newCatname);
    this.newCatname = '';
  }

  removeCat(index: number): void {
    this.cats.splice(index, 1);
  }
}
