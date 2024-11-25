import {Component, Input} from '@angular/core';
import {Flower} from "../flower";

@Component({
  selector: 'app-flower-details',
  standalone: true,
  imports: [],
  templateUrl: './flower-details.component.html',
  styleUrl: './flower-details.component.css'
})
export class FlowerDetailsComponent {

  @Input() flower: Flower | undefined;
}
