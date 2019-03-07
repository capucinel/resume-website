import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    lastname: new FormControl(''),
    firstname:  new FormControl(''),
    email: new FormControl(''),
    phone:  new FormControl(''),
    object:  new FormControl(''),
    message:  new FormControl('')
  });

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
