import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent {
  @Input() cat: string;
  @Output() catDeletion = new EventEmitter();

  removeCat(): void {
    this.catDeletion.emit();
  }
}
