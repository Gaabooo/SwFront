import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/planet';
import { PlanetService } from '../services/planet.service'

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: any;
  selectedOrder: any;

  orders: any[] = [
    { value: 'alpha', viewValue: 'Alphabetical Order' },
    { value: 'size', viewValue: 'Diameter' }
  ];

  constructor(private planetService: PlanetService) {
    this.getPlanets();
  }

  ngOnInit() {

  }

  getPlanets(): void {
    this.planetService.getPlanets()
      .subscribe(planets => this.planets = planets);
  }

  sortPlanets(selectedOrder: any): void {
    if (selectedOrder.value == 'alpha') {
      this.planets.sort(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else {
      this.planets.sort(function (a, b) {
        return b.diameter - a.diameter;
      });
    }
  }
}
