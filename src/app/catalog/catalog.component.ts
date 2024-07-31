import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {Flower} from "../flower";
import {FlowerDataService} from "../flower-data.service";
import {AsyncPipe, CurrencyPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {LoadingStatus} from "../loading-status";

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

  loadingStatus: LoadingStatus = LoadingStatus.LOADING;

  private flowersSub: Subscription | undefined;

  constructor(flowerDataService: FlowerDataService) {
    this.flowersSub = flowerDataService.getAllFlowers().subscribe({
        next: flowers => {
          this.flowers = flowers;
          this.loadingStatus = LoadingStatus.SUCCESS
        },
        error: () => this.loadingStatus = LoadingStatus.ERROR
      }
    );
  }

  ngOnDestroy() {
    this.flowersSub?.unsubscribe();
  }

  protected readonly LoadingStatus = LoadingStatus;
}
