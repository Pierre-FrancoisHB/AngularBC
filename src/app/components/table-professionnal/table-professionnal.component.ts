import { Component, OnInit } from '@angular/core';
import { ProfessionnalService } from 'src/app/services/professionnal/professionnal.service';
import { Professionnal } from 'src/app/models/professionnal.model';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-table-professionnal',
  templateUrl: './table-professionnal.component.html',
  styleUrls: ['./table-professionnal.component.css']
})
export class TableProfessionnalComponent implements OnInit {

  apiUrl: string;

  professionnals: Array<Professionnal>;

  professionnalsSub: Subscription;

  constructor(private professionnalService: ProfessionnalService) {
  }

  ngOnInit(): void {
    this.professionnalsSub = this.professionnalService.professionnals.subscribe(
      (newprofessionnalsVal: Array<Professionnal>) => this.professionnals = newprofessionnalsVal
    );
  }


}
