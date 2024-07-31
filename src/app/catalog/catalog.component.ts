import { Component } from '@angular/core';
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

  flowers: Flower[] | undefined;
  private flowersSub: Subscription | undefined;

  constructor(flowerDataService: FlowerDataService) {
    this.flowersSub = flowerDataService.getAllFlowers().subscribe(flowers => this.flowers = flowers);
  }

  ngOnDestroy(){
    this.flowersSub?.unsubscribe();
  }
}
