import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {

  isShow : boolean = false ;
  title : string = "Top 3 Movies";
  movies:Movie[] =[
    {title:'Avenger',director:'Joss Whedon',cast:'Iron Man',releaseDate:'2019'},
    {title:'War',director:'Siddharth Anand',cast:'Hrithik',releaseDate:'2019'},
    {title:'KGF',director:'Prashanth Neel',cast:'Yash',releaseDate:'2018'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
