import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {Flower} from "../flower";

@Component({
  selector: 'app-flower-index',
  standalone: true,
  imports: [
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  @Input() flowers: Flower[] | undefined;

  @Output() flowerSelected: EventEmitter<Flower>  = new EventEmitter();

  onFlowerSelect(f: Flower): void {
    this.flowerSelected.emit(f);
  }
}
