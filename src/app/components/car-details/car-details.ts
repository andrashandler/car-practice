import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  standalone: false,
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails implements OnInit {
  car?: Car;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.car = this.carService.getCarById(id);
  }
}
