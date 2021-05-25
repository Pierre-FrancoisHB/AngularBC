import { Energy } from './../../models/energy.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {

  apiUrl: string;

  energies: BehaviorSubject<Array<Energy>>;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://127.0.0.1:8000/api';
    this.energies = new BehaviorSubject<Array<Energy>>([]);
  }

  getEnergies() {

    this.httpClient
      .get(this.apiUrl + '/energies/')
      .subscribe(
        (res: any) => {

          const energies = [];
          res['hydra:member'].forEach(item => {
            const energy = Energy.fromJSON(item);
            energies.push(energy);
            this.energies.next(energies);
          })
        }
      );
  }
}
