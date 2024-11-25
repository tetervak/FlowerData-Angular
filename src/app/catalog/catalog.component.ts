import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Flower} from "../flower";
import {FlowerDataService} from "../flower-data.service";
import {AsyncPipe, CurrencyPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-flower-index',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    CurrencyPipe
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
