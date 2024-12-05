import {Component, Input} from '@angular/core';
import {Flower} from "../flower";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-flower-details',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './flower-details.component.html',
  styleUrl: './flower-details.component.css'
})
export class FlowerDetailsComponent {

  @Input() flower: Flower | undefined;
}
