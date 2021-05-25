import { Vehicule } from './../../models/vehicule.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  apiUrl: string;

  vehicules: BehaviorSubject<Array<Vehicule>>;

  vehiculePages: BehaviorSubject<Array<number>>;

  researchResults: BehaviorSubject<Array<Vehicule>>;

  vehicule: Vehicule;

  error: string;


  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://127.0.0.1:8000/api';
    this.vehicules = new BehaviorSubject<Array<Vehicule>>(null);
    this.vehiculePages = new BehaviorSubject<Array<number>>(null);
    this.researchResults = new BehaviorSubject<Array<Vehicule>>(null);

  }

  getVehicules(pageNumber: number) {
    this.httpClient
      .get(this.apiUrl + '/vehicules?page=' + pageNumber)
      .subscribe(
        (res: any) => {
          const vehiculesArray = [];
          res['hydra:member'].forEach(item => {
            const vehicule = Vehicule.fromJSON(item);
            vehiculesArray.push(vehicule);
          })
          this.vehicules.next(vehiculesArray);

          //The split mehtod allow to separate a string in an array of ordered under-strings, and return this array
          const pagesNumber = res['hydra:view']['hydra:last'].split('=')[1];

          const array = [];
          for (let i = 1; i <= +pagesNumber; i++) {
            array.push(i);
          }
          this.vehiculePages.next(array);
        }
      )
  }

  getResearchVehicule(brand: number, model: number,
    energy: number, minYear: number, maxYear: number,
    minKms: number, maxKms: number, minPrice: number,
    maxPrice: number): Promise<void> {

    return new Promise(

      (res, rej) => {

        let restUrl = '/vehicules/research?brand=' + brand;
        if (model && (model >= 0)) {
          restUrl += '&model=' + model;
        }
        if (energy && (energy >= 0)) {
          restUrl += '&energy=' + energy;
        }
        if (minYear) {
          restUrl += '&minYear=' + minYear;
        }
        if (maxYear) {
          restUrl += '&maxYear=' + maxYear;
        }
        if (minKms) {
          restUrl += '&minKms=' + minKms;
        }
        if (maxKms) {
          restUrl += '&maxKms=' + maxKms;
        }
        if (minPrice) {
          restUrl += '&minPrice=' + minPrice;
        }
        if (maxPrice) {
          restUrl += '&maxPrice=' + maxPrice;
        }

        console.log(restUrl)

        this.httpClient
          .get(this.apiUrl + restUrl)
          .subscribe(
            (result: any) => {
              const researchResultsArray = [];
              console.log(result);
              result.forEach(item => {
                const vehiculeResearch = Vehicule.fromJSON(item);
                researchResultsArray.push(vehiculeResearch);
              })
              this.researchResults.next(researchResultsArray);
              console.log(researchResultsArray);
              res();
              //console.log(researchResults);
            }
          )
      }
    )
  }
  //here functions to creat to get photos and model !!

  getVehiculeById(id: number): Promise<Vehicule> {
    return new Promise(

      (res, rej) => {

        this.httpClient
          .get(this.apiUrl + '/vehicules/' + id)
          .subscribe(
            (result: Vehicule) => {
              console.log(result);
              res(result);
            },
            (error = 'Ce véhicule n\'existe pas') => {
              rej(error)
            }
          )
      }

    )
  }

}
