import { Brand } from './../../models/brand.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl: string;

  brands: BehaviorSubject<Array<Brand>>;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://127.0.0.1:8000/api';
    this.brands = new BehaviorSubject<Array<Brand>>([])
  }




  getBrands() {

    this.httpClient
      .get(this.apiUrl + '/brands')
      .subscribe(
        (res: any) => {

          const brands = [];
          res['hydra:member'].forEach(item => {
            const brand = Brand.fromJSON(item);
            brands.push(brand);
            this.brands.next(brands);
          })
        }
      );
  }

  //getBrands() {
  //
  //  const brands = this.httpClient
  //    .get(this.apiUrl + '/brands')
  //    .pipe(
  //      map(
  //        (res: any) => {
  //          const arrayBrands = res['hydra:member'].map(item => {
  //            Brand.fromJSON(item)
  //          });
  //
  //          return { brands: arrayBrands }
  //
  //        })
  //    );
  //  console.log(brands)
  //}



}