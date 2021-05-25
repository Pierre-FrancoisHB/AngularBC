import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/models/photo.model';
import { Vehicule } from 'src/app/models/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule/vehicule.service';

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.css']
})
export class DetailVehiculeComponent implements OnInit {

  vehicule: Vehicule;

  photoObject: Photo;

  mainPhoto: string;

  constructor(private route: ActivatedRoute, private vehiculeService: VehiculeService) { }

  ngOnInit(): any {
    // le snapshot permet de prendre une photo de l'url, et donc d'accéder à tous les éléemnts : les paramètres, mais aussi le début pour voir par ex. si on est sur une route qui commence par toto. Est accessible via le ActivatedRoute
    const id = this.route.snapshot.params.id;

    this.vehiculeService.getVehiculeById(+id)
      .then((res) => {
        this.vehicule = res;
        console.log(this.vehicule);
        return this.vehicule;
      }
      )
      .catch((error) => {
        console.log(error);
      })


    //const photoObject = this.vehicule.photos[1];
    // const photoLinkUrl = photoObject.photoLink;
  }




}
