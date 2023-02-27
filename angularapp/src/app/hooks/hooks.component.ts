import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  pi;
  @Input() userid: number;

  // @Input () test2: string;
  @Input() parentData: string;

  @Input() product: Product;

  @ContentChild("child",{static:false}) ContentChild: ElementRef;
  @ViewChild("childhook",{static : false}) viewChild:ElementRef;

  counter;
  num:number = 1;

  constructor() {
    this.pi = 3.14;
   // console.log("HooksComponent constructor called ");
   console.log('constructor called ');
   

  }
  ngOnDestroy(): void {
   console.log('ngOnDestroy called');
   clearInterval(this.counter);
   
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    this.viewChild.nativeElement.setAttribute('style', `color :${this.parentData}`);
  }
  ngAfterViewInit(): void {
    console.log( 'ngAfterViewInit called',this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color :${this.parentData}`);
    
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    this.ContentChild.nativeElement.setAttribute('style', `color :${this.parentData}`);
    
  }
 
  ngAfterContentInit(): void {
   console.log('ngAfterContentInit',this.ContentChild);
  //  this.ContentChild.nativeElement.setAttribute('style', 'color:green');
  // this.ContentChild.nativeElement.setAttribute('style', `color :${this.parentData}`);
  console.log('view int acess',this.viewChild);
  
   
  }
   ngDoCheck(): void {
     console.log('ngDoCheck called',this.ContentChild);
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log("HooksComponent ngOnChanges called ");
    console.log('ngOnChanges called');
    
    // console.log(this.parentData);

    // for (const propname in changes) {
    //   const prop = changes[propname];

    //   const { previousValue, currentValue, firstChange } = prop;

    //   console.log(`Prop name ${propname}`);
    //   console.log(`Previous Value ${previousValue}`);
    //   console.log(`Current Value ${currentValue}`);
    //   console.log(`First Change ${firstChange}`);
    //   console.log("------------------------------");

    // }

    // console.log("HooksComponent ngOnChanges called");

  }
  // hooks
  ngOnInit() {
    //console.log("HooksComponent ngOnInit called ");
    //api
    console.log('ngOnInit called');

    this.counter = setInterval(() => {
      this.num = this. num + 1 ;
      console.log(this.num);
      //api
    } ,1000)
    
  }

}
  