import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attri',
  templateUrl: './attri.component.html',
  styleUrls: ['./attri.component.css']
})
export class AttriComponent implements OnInit {
uname;
  colorVal='blue';

  people:any[] =[
    {
      "name":"Jack",
      "country":"UK"
    },
    {
      "name":"Sumit",
      "country":"USA"   
    },
    {
      "name":"Anup",
      "country":"HK"
    },
    {
      "name":"Codemind",
      "country":"HK"
    },
    {
      "name":"Surya",
      "country":"USA"
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  show(value)
  {
    this.uname = value;
    
    
  }
}
