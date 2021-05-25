import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Vehicule } from 'src/app/models/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule/vehicule.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vehicules: Array<Vehicule>;

  vehiculesSub: Subscription;

  pageNbr: Array<number>;

  pageNbrsSub: Subscription;

  pageClickInit: number;

  constructor(private vehiculeService: VehiculeService) {

  }

  ngOnInit(): void {
    this.initSubs();
    this.vehiculeService.getVehicules(1);
    this.pageClickInit = 1;
  }

  onClickNewUsers(pageClick) {
    this.vehiculeService.getVehicules(pageClick);
  }

  private initSubs(): void {
    this.vehiculesSub = this.vehiculeService.vehicules.subscribe(
      (newUsersVal: Array<Vehicule>) => this.vehicules = newUsersVal
    );
    this.pageNbrsSub = this.vehiculeService.vehiculePages.subscribe(
      (newPageVal: Array<number>) => this.pageNbr = newPageVal
    );
  }

  ngOnDestroy(): void {
    this.vehiculesSub.unsubscribe();
  }

}
