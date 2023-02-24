import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;
  name: string;
  price:number;
  product: Product = new Product();
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

// console.log(value);
//this.foods.push(value);

  }
  handleData(value){
    this.data = value.target.value; 
  }
updateProduct() {
  //this.product = new Product();
  this.product.name = this.name;
  this.product.price = this.price;

}


}
