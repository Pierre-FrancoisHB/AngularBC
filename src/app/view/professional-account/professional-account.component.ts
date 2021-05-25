import { ProfessionnalService } from './../../services/professionnal/professionnal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professionnal } from 'src/app/models/professionnal.model';
import { TabHeadingDirective } from 'ngx-bootstrap/tabs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-professional-account',
  templateUrl: './professional-account.component.html',
  styleUrls: ['./professional-account.component.css']
})
export class ProfessionalAccountComponent implements OnInit {

  firstButtonStatus: boolean;

  secondButtonStatus: boolean;

  garageOneStatus: boolean;

  garageTwoStatus: boolean;

  garageThreeStatus: boolean;

  profilForm: FormGroup;

  professionnal: Professionnal;

  msg: string;


  constructor(private formBuilder: FormBuilder, private professionnalService: ProfessionnalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.professionnalService.getProfessionnalById(+id).then(
      (professionnal: Professionnal) => {
        this.professionnal = professionnal;
      }
    );
    this.firstButtonStatus = true;
    this.secondButtonStatus = false;
    this.garageOneStatus = true;
    this.garageTwoStatus = false;
    this.garageThreeStatus = false;
  }

  private initForm(): void {
    this.profilForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(8)]],
      siret: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(13)]],
      personnalTel: [''],
    })
  }

  onChangeSecondButton(evt: any) {
    this.firstButtonStatus = false;
    this.secondButtonStatus = true;
  }

  onChangeFirstButton(evt: any) {
    this.firstButtonStatus = true;
    this.secondButtonStatus = false;
  }

  onSelectGarageOne(evt: any) {
    this.garageOneStatus = true;
    this.garageTwoStatus = false;
    this.garageThreeStatus = false;
    console.log(this.garageTwoStatus)
  }

  onSelectGarageTwo(evt: any) {
    this.garageOneStatus = false;
    this.garageTwoStatus = true;
    this.garageThreeStatus = false;
  }

  onSelectGarageThree(evt: any) {
    this.garageOneStatus = false;
    this.garageTwoStatus = false;
    this.garageThreeStatus = true;
  }

  onSubmitEditProfil(): void {
    this.professionnalService.editProfil(this.professionnal)
      .then(() => {
        this.msg = 'Modification réussie !';
        setTimeout(() => {
          this.msg = undefined;
          this.router.navigate(['books']);
        }, 3000);
      });

  }
}
