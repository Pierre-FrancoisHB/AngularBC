import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Brand } from 'src/app/models/brand.model';
import { Model } from 'src/app/models/model.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  apiUrl: string;

  models: BehaviorSubject<Array<Model>>;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://127.0.0.1:8000/api';
    this.models = new BehaviorSubject<Array<Model>>([])
  }

  getModels() {

    this.httpClient
      .get(this.apiUrl + '/models/')
      .subscribe(
        (res: any) => {
          const models = [];
          res['hydra:member'].forEach(item => {
            const model = Model.fromJSON(item);
            models.push(model);
            this.models.next(models);
          })
        }
      );




  }

}
