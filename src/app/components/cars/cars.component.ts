import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services";
import {ICar} from "../../interfaces";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  form: FormGroup;
  cars: ICar[]

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => {
      this.cars = value
      // console.log(value);
      // console.log(this.cars);
    })
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null)
    })
  }

  create(): void {
    this.carService.create(this.form.getRawValue()).subscribe(value => {
      this.cars.push(value)
      console.log(this.cars)
    })
  }

}
