import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from '../providers/http.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public http: HttpService) {}

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

    const data = this.contactForm.value;

    this.http.sendEmail('http://localhost:4000/sendmail', data).subscribe(
      data => {
        const res: any = data;
        console.log(
          'test ok'
        );
      },
      err => {
        console.log('cest loupé meuf' + err);
      }, () => {
      }
    );
  }


  ngOnInit() {
  }

}
