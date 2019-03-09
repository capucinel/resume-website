import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from '../providers/http.service';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public http: HttpService, private fb: FormBuilder, private router: Router) {}

  contactForm: FormGroup;


  ngOnInit() {
    this.contactForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname:  ['', Validators.required],
      phone:  ['', null],
      object: ['', Validators.required],
      message:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);

    const message = this.contactForm.value;

    this.http.sendEmail('http://localhost:4000/sendmail', message).subscribe(
      data => {
        const res: any = data;
        console.log(
          'test ok'
        );
        alert('cool!');
        this.router.navigate(['about']);
      },
      err => {
        console.log('cest loupé meuf' + err);
      }, () => {
      }
    );
  }

}
