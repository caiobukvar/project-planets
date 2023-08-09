import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/Planet';
import { GetPlanetInfoService } from 'src/app/services/get-planet-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planet$?: Planet
  constructor(private getPlanetsService: GetPlanetInfoService, private route: ActivatedRoute) {
    this.getPlanet()
  }

  ngOnInit(): void {

  }

  getPlanet(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      return;
    }

    this.getPlanetsService.getPlanetById(id).subscribe((planet) => (this.planet$ = planet));
  }
}
