import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Vehicule } from 'src/app/models/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule/vehicule.service';

@Component({
  selector: 'app-table-last-cars',
  templateUrl: './table-last-cars.component.html',
  styleUrls: ['./table-last-cars.component.css']
})
export class TableLastCarsComponent implements OnInit {

  vehicules: Array<Vehicule>;

  pageNbr: Array<number>;

  vehiculesSub: Subscription;

  pagesNbrSub: Subscription;

  detailsUrl: string;

  currentPageNbr: number;

  constructor(private vehiculeService: VehiculeService) {
    this.detailsUrl = '/';
    this.currentPageNbr = 1;
  }

  ngOnInit(): void {
    this.initSubs();
    this.vehiculeService.getVehicules(1);
  }

  onClickNewVehicules(pageClick) {
    this.currentPageNbr = pageClick;
    this.vehiculeService.getVehicules(pageClick);
  }


  private initSubs() {
    this.vehiculesSub = this.vehiculeService.vehicules.subscribe(
      (newVehiculesVal: Array<Vehicule>) => this.vehicules = newVehiculesVal

    );
    console.log(this.vehiculesSub);

    this.pagesNbrSub = this.vehiculeService.vehiculePages.subscribe(
      (newPagesVal: Array<number>) => this.pageNbr = newPagesVal
    );
  }

  ngOnDestroy(): void {
    this.vehiculesSub.unsubscribe();
    this.pagesNbrSub.unsubscribe();
  }

}
