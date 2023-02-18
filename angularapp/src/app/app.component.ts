import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public uid: number;
  title = 'Angular Batch 4';  
  uname = 'I am from app component';
  EmployeeRecords: any = [
    {
     eName:'Dyanesh', eCity:'pune', eSalery:'200000'
    },
    {
      eName:'Suresh', eCity:'nagpur', eSalery:'150000' 
   }
  ]
foods: string[] = [];

  getDataFromChild(value) {

console.log(value);
this.foods.push(value);

  }
}
