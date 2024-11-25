import {Component, Input} from '@angular/core';
import {Flower} from "../flower";
import {Subscription} from "rxjs";
import {FlowerDataService} from "../flower-data.service";
import {ActivatedRoute, RouterLink} from "@angular/router";

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

  @Input() flower: Flower | undefined;
}
