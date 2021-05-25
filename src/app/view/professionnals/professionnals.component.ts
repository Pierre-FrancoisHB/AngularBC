import { Professionnal } from './../../models/professionnal.model';
import { ProfessionnalService } from './../../services/professionnal/professionnal.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-professionnals',
  templateUrl: './professionnals.component.html',
  styleUrls: ['./professionnals.component.css']
})
export class ProfessionnalsComponent implements OnInit {

  professionnals: Array<Professionnal>;

  professionnalsSub: Subscription;


  constructor(private professionnalService: ProfessionnalService) { }

  ngOnInit(): void {
    this.initSubs();
    this.professionnalService.getProfessionnal();
  }

  initSubs(): void {
    this.professionnalsSub = this.professionnalService.professionnals.subscribe(
      (newProfessionnalsVal: Array<Professionnal>) => this.professionnals = newProfessionnalsVal
    );
  }

  ngOnDestroy(): void {
    this.professionnalsSub.unsubscribe();
  }


}
