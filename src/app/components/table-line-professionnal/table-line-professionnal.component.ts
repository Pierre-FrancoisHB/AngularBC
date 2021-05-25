import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-line-professionnal]',
  templateUrl: './table-line-professionnal.component.html',
  styleUrls: ['./table-line-professionnal.component.css']
})
export class TableLineProfessionnalComponent implements OnInit {

  @Input() id: number;
  @Input() lastname: string;
  @Input() firstname: string;
  @Input() email: string;
  @Input() telephone: string;

  detailsUrl: string;
  editUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.detailsUrl = '/professionnal/' + this.id;
    this.editUrl = '/professionnal/edit/' + this.id;
  }

}
