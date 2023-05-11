import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{

  cars : any[];
  hide : boolean;

  constructor(){
    this.hide = true
    this.cars=[
      {
        name: "BMW",
        model: "series2",
        year: 2019
      },

      {
        name: "Mercedes",
        model: "series9",
        year: 2023
      },

      {
        name: "Swift",
        model: "series3",
        year: 2010
      }
    ]
  }

  public getCars(){
    return this.cars;
  }

  toggle(){
    this.hide = !this.hide;
  }

  ngOnInit(): void {
    
  }

}
