import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car-service';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search-service';

@Component({
  selector: 'app-car-list',
  standalone: false,
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList implements OnInit {
  cars: Car[] = [];
  filteredCars: Car[] = [];

  // navbarból érkező filter text amire feliratkozunk a searchService-ből
  searchTerm = '';
  
  constructor(private carService: CarService, private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.searchService.searchTerm$.subscribe(term => {
      this.searchTerm = term;
      this.filterCars();
    });

    this.cars = this.carService.getCars();
    this.filteredCars = [...this.cars];
  }

  showCarDetails(id: string): void {
    this.router.navigate(['/cars', id]);
  }

  filterCars() {    

    // keresőmező értéke
    const search = this.searchTerm.toLowerCase().trim();

    // felbontom szavakra
    const terms = search.split(/\s+/);

    this.filteredCars = this.cars.filter(car =>{
      // ebben keressünk:
      const carInfo = `${car.brand} ${car.model} ${car.year}`.toLowerCase();
      
      // minden szó legyen benne valahol:
      return terms.every(word => carInfo.includes(word));
    });
  }
}
