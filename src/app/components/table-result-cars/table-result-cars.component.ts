import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Vehicule } from 'src/app/models/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule/vehicule.service';

@Component({
  selector: 'app-table-result-cars',
  templateUrl: './table-result-cars.component.html',
  styleUrls: ['./table-result-cars.component.css']
})
export class TableResultCarsComponent implements OnInit {

  vehicules: Array<Vehicule>;

  resultResearchSub: Subscription;

  constructor(private vehiculeService: VehiculeService) {

  }

  ngOnInit(): void {
    this.initSubs();
  }

  private initSubs() {
    this.resultResearchSub = this.vehiculeService.researchResults.subscribe(
      (newVehiculesResearch: Array<Vehicule>) => {
        this.vehicules = newVehiculesResearch
        console.log(newVehiculesResearch)
      });
  }

  ngOnDestroy(): void {
    this.resultResearchSub.unsubscribe();
  }

}
