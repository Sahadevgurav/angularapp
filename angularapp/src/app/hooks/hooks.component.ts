import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck{
  pi;
  @Input() userid: number;

  // @Input () test2: string;
  @Input() parentData: string;

  @Input() product: Product;

  constructor() {
    this.pi = 3.14;
    console.log("HooksComponent constructor called ");

  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("HooksComponent ngOnChanges called ");
    // console.log(this.parentData);

    for (const propname in changes) {
      const prop = changes[propname];

      const { previousValue, currentValue, firstChange } = prop;

      console.log(`Prop name ${propname}`);
      console.log(`Previous Value ${previousValue}`);
      console.log(`Current Value ${currentValue}`);
      console.log(`First Change ${firstChange}`);
      console.log("------------------------------");

    }

    // console.log("HooksComponent ngOnChanges called");

  }
  // hooks
  ngOnInit() {
    console.log("HooksComponent ngOnInit called ");
    //api
  }

}
  