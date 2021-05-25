import { Professionnal } from './../../models/professionnal.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessionnalService {

  apiUrl: string;

  professionnals: BehaviorSubject<Array<Professionnal>>;


  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://127.0.0.1:8000/api';
    this.professionnals = new BehaviorSubject<Array<Professionnal>>(null);
  }

  headerContentToken() {
    let userToken = sessionStorage.getItem('token');
    console.log(userToken);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + userToken
    });
    return headers;
  }

  getProfessionnal(): void {

    let headers = this.headerContentToken();

    this.httpClient
      .get(this.apiUrl + '/professionnals', { headers: headers })
      .subscribe(
        (res: any) => {
          const professionnals = [];
          res['hydra:member'].forEach(item => {
            const professionnal = Professionnal.fromJSON(item);
            professionnals.push(professionnal);
          })
          this.professionnals.next(professionnals);

        }
      );
  }

  getProfessionnalById(id: number) {
    let userToken = sessionStorage.getItem('token');
    console.log(userToken);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + userToken
    });


    return new Promise<Professionnal>(

      (res, rej) => {

        this.httpClient
          .get(this.apiUrl + '/professionnals/' + id, { headers: headers })
          .pipe(
            map((res: any) => {
              const professionnal = Professionnal.fromJSON(res);
              return { professionnal: professionnal }
            }
            )
          )
          .subscribe(
            (result: any) => {
              res(result.professionnal);
            },
            (error = "Aucun professionnel référencé") => {
              rej(error)
            }
          );

      }
    )
  }



  editProfil(professionnalToEdit: Professionnal): Promise<void> {
    return new Promise(

      (res, rej) => {

        return this.httpClient
          .post(this.apiUrl + '/professionnal/' + professionnalToEdit.id, professionnalToEdit)
          .subscribe(
            (res) => console.log(res),
            (error = "Une erreur s'est produite") => {
              rej(error)
            }
          )
      },
    )
  }

}
