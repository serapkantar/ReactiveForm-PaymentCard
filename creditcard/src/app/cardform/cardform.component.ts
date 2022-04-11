import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { DateFormControl } from '../date-form-control';
@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.scss']
})
export class CardformComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(3),
      ]),

    cardNumber: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),

      ]),
    expiration: new DateFormControl(null,
      [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)

      ]),
    securityCode: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),

  })
  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log("kaydedildi");
  }

}
