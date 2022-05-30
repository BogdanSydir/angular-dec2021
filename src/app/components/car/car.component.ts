import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarService} from "../../services";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car: ICar

  constructor(private carService:CarService) { }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.carService.deleteById(id).subscribe(value => console.log(value))
  }
}
