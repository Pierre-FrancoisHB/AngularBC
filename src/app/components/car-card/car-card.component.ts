import { VehiculeService } from '../../services/vehicule/vehicule.service';
import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { Model } from 'src/app/models/model.model';

@Component({


  selector: '[app-car-card]',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {


  @Input() id: number;
  @Input() kilometer: number;
  @Input() price: number;
  @Input() year: number;
  @Input() photos: Array<Photo>;
  // @Input() brand: string;
  @Input() model: Model;

  detailsUrl: string;
  //object: Photo;
  //photo: string;

  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit(): void {

    //for(this.object of this.photos) {
    // if(this.object.mainphoto) {
    // this.photo = this.object.photolink;

    this.photos[1];
  }

  getDetailUrl(id: number): string {
    return '/vehicule/' + id;
  }

}


