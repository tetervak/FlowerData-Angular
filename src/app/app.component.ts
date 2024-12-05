import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {FlowerDetailsComponent} from "./flower-details/flower-details.component";
import {Flower} from "./flower";
import {Subscription} from "rxjs";
import {FlowerDataService} from "./flower-data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, CatalogComponent, FlowerDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Flower Data';

  flowers: Flower[] | undefined;
  subscription: Subscription;

  selectedFlower: Flower | undefined;

  constructor(flowerDataService: FlowerDataService) {
    this.subscription = flowerDataService.getAllFlowers().subscribe(
      flowers => {
        this.flowers = flowers
        this.selectedFlower = flowers[0]
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onFlowerSelected(flower: Flower) {
    this.selectedFlower = flower;
  }
}
