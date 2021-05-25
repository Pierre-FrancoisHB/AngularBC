import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model.model';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: '[app-result-card]',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {

  @Input() id: number;
  @Input() kilometer: number;
  @Input() price: number;
  @Input() year: number;
  @Input() photos: Array<Photo>;
  // @Input() brand: string;
  @Input() model: Model;

  detailsUrl: string;
  constructor() { }

  ngOnInit(): void {
    this.detailsUrl = '/vehicule/' + this.id;
  }

  getDetailUrl(id: number): string {
    return '/vehicule/' + id;
  }

}
