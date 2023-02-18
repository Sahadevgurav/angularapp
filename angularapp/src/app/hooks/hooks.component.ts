import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges {
pi;
   @Input()  userid: number;
  // @Input () test2: string;
  constructor() {
    this.pi = 3.14;
    console.log("HooksComponent constructor called ");
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("HooksComponent ngOnChanges called ");
    for (const propname in changes) {
      const prop = changes[propname];

      const{previousValue, currentValue, firstChange} = prop;
      
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
    
  }

}
