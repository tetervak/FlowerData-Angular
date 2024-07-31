import { Component } from '@angular/core';
import {Flower} from "../flower";
import {Subscription} from "rxjs";
import {FlowerDataService} from "../flower-data.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {LoadingStatus} from "../loading-status";

@Component({
  selector: 'app-flower-details',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './flower-details.component.html',
  styleUrl: './flower-details.component.css'
})
export class FlowerDetailsComponent {

  flower: Flower | undefined;

  private flowerSub: Subscription | undefined;

  loadingStatus: LoadingStatus = LoadingStatus.LOADING;

  constructor(flowerDataService: FlowerDataService, activatedRoute: ActivatedRoute) {

    const id: string | null =  activatedRoute.snapshot.paramMap.get('id');
    if(id != null){
      this.flowerSub =
        flowerDataService.getFlowerById(id).subscribe(
          {
            next: flower => {
              this.flower = flower;
              this.loadingStatus = LoadingStatus.SUCCESS
            },
            error: () => this.loadingStatus = LoadingStatus.ERROR
          }

        );
    }
  }

  ngOnDestroy(){
    this.flowerSub?.unsubscribe();
  }

  protected readonly LoadingStatus = LoadingStatus;
}
