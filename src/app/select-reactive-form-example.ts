import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

/**
 * @title Select in a reactive form
 */
@Component({
  selector: 'select-reactive-form-example',
  templateUrl: 'select-reactive-form-example.html',
  styleUrls: ['select-reactive-form-example.css'],
})
export class SelectReactiveFormExample {
  form: FormGroup;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
  foodControl = new FormControl(this.foods[2].value);
  carControl = new FormControl(this.cars[1].value);

  constructor() {
    this.form = new FormGroup({
      food: this.foodControl,
      car: this.carControl
    });
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */