import { RouterTestingModule } from '@angular/router/testing';
import { VehiculeService } from './../../services/vehicule/vehicule.service';
import { Energy } from './../../models/energy.model';
import { EnergyService } from './../../services/energy/energy.service';
import { ModelService } from './../../services/model/model.service';
import { BrandService } from './../../services/brand/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand.model';
import { Subscription } from 'rxjs';
import { Model } from 'src/app/models/model.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  brandsSub: Subscription;
  modelsSub: Subscription;
  energiesSub: Subscription;
  brands: Array<Brand>;
  models: Array<Model>;
  energies: Array<Energy>;
  modelsForBrandId: Array<Model>;

  selectCarForm: FormGroup;

  brandId: number;
  modelId: number;
  energyId: number;

  errorMsg: string;

  optionsYears: Options;
  minYear: number = 1930;
  maxYear: number = 2015;

  optionsKms: Options;
  minKms: number = 20000;
  maxKms: number = 150000;

  optionsPrice: Options;
  minPrice: number = 10000;
  maxPrice: number = 800000;

  constructor(private brandService: BrandService, private modelService: ModelService, private energyService: EnergyService, private formBuilder: FormBuilder, private vehiculeService: VehiculeService, private router: Router) {
    this.brandId = -1;
    this.modelId = -1;
    this.energyId = -1;

  }

  ngOnInit(): void {
    this.initSubs();
    this.brandService.getBrands();
    this.modelService.getModels();
    this.energyService.getEnergies();
    this.initForm();
    this.initSlider();
  }


  private initSubs(): void {
    this.brandsSub = this.brandService.brands.subscribe(
      (newBrandsVal: Array<Brand>) => this.brands = newBrandsVal
    );

    this.modelsSub = this.modelService.models.subscribe(
      (newModelsVal: Array<Model>) => this.models = newModelsVal
    );

    this.energiesSub = this.energyService.energies.subscribe(
      (newEnergiesVal: Array<Energy>) => this.energies = newEnergiesVal
    );
  }

  onChangeBrand(evt: any) {
    //console.log(this.models);
    this.modelsForBrandId = this.models.filter(model => model.brand.id === parseInt(evt.target.value));
    console.log(this.modelsForBrandId)
  }


  private initForm() {
    this.selectCarForm = this.formBuilder.group({
      brand: [-1, [Validators.required]],
      model: [-1],
      energy: [-1],
      minYear: [''],
      maxYear: [''],
      minKms: [''],
      maxKms: [''],
      minPrice: [''],
      maxPrice: [''],
    });
  }

  onSubmitSelectCars() {
    console.log(this.brandId);
    console.log(this.modelId);
    console.log(this.energyId);

    this.vehiculeService.getResearchVehicule(
      this.brandId, this.modelId, this.energyId, this.minYear,
      this.maxYear, this.minKms, this.maxKms, this.minPrice, this.maxPrice
    )

      .then((researchResults) => {
        this.router.navigate(['research-return'])
        console.log(researchResults);
      })
      .catch(() => {
        this.errorMsg
      })
  }

  initSlider() {
    this.optionsYears = {
      floor: 1901,
      step: 1,
      ceil: 2021,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return "<b>Min:</b> " + value;
          case LabelType.High:
            return "<b>Max:</b> " + value;
          default:
            return "" + value;
        }
      }
    };

    this.optionsKms = {
      floor: 10000,
      step: 500,
      ceil: 1000000,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return "<b>Min:</b> " + value + " kms";
          case LabelType.High:
            return "<b>Max:</b> " + value + " kms";
          default:
            return "" + value;
        }
      }
    };

    this.optionsPrice = {
      floor: 5000,
      step: 500,
      ceil: 1000000,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return "<b>Min:</b> " + value + " €";
          case LabelType.High:
            return "<b>Max:</b> " + value + " €";
          default:
            return "" + value;
        }
      }
    };


  }


  ngOnDestroy(): void {
    this.brandsSub.unsubscribe();
    this.modelsSub.unsubscribe();
    this.energiesSub.unsubscribe();
  }

}
