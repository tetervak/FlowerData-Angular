import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Flower} from "../flower";
import {CurrencyPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-flower-index',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  @Input() flowers: Flower[] | undefined;
  @Output() flowerSelected = new EventEmitter<Flower>();

  onFlowerSelected(f: Flower) {
    this.flowerSelected.emit(f);
  }
}
