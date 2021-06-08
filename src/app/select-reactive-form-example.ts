import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

interface model {
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
  models: model[] = [
    {value: 'Camry-210', viewValue: 'Camry-210'},
    {value: 'SEDAN-1', viewValue: 'SEDAN-1'},
    {value: 'COUPE-2', viewValue: 'COUPE-2'},
    {value: 'MiniClubman', viewValue: 'MiniClubman'}
  ];
  cars: Car[] = [
    {value: 'Volvo', viewValue: 'Volvo'},
    {value: 'Saab', viewValue: 'Saab'},
    {value: 'Mercedes', viewValue: 'Mercedes'},
    {value: 'Mini cooper', viewValue: 'Mini cooper'}
  ];
  modelControl = new FormControl(this.models[2].value);
  carControl = new FormControl(this.cars[1].value);

  constructor() {
    this.form = new FormGroup({
      model: this.modelControl,
      car: this.carControl
    });
  }
}

