import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  // @Input() myinputMsg: string;
  @Input() employee: any;
  @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    //console.log('from parent',this.myinputMsg);
    console.log('from parent', this.employee);

  }
  // function will call once user enter text box value
  addtofood(value) {
    // foodevent is nothing but your custom event
    this.foodevent.emit(value);
  }
}




