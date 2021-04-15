import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { ContactUsService } from './services/contact-us.service';




@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  errors = [];



  contactusForm: FormGroup = this._fb.group({

    email: ['', Validators.required],

    message: ['', Validators.required],

    name : ['', Validators.required],

    subject : ['', Validators.required],

  });



  constructor(

    private _fb: FormBuilder,

   private _contactUsService: ContactUsService,

    private _router: Router

  ) { }



  ngOnInit(): void {

  }



  onSubmit(form: FormGroup) {

    if (form.valid) {

      const message = form.value;

      this._contactUsService.addMessage(message).subscribe(

        (res: any) => {

          this.errors = [];

          this._router.navigate(['/contact-us', res.data.id]);

        },

        (err: any) => {

          console.log(err);

          this.errors = err.error.error || [];

        }

      )

      

    }

    

      document.getElementById("add_to_me").innerHTML = 
      '<div class="alert alert-success" >Message sent successfully</div>';

  }


}