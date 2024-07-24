import { Component } from '@angular/core';
import {Subscription} from "rxjs";
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

  flowers: Flower[] = [];

  private flowersSub: Subscription | undefined;

  constructor(flowerDataService: FlowerDataService) {
    flowerDataService.getAllFlowers().subscribe(flowers => this.flowers = flowers);
  }

  ngOnDestroy(){
    this.flowersSub?.unsubscribe();
  }
}
