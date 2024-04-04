import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  langs: string[] = ["English", "French", "German"];
  constructor() { }
  myform!: FormGroup;
  name!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  email!: FormControl;
  password!: FormControl;
  language!: FormControl;

  ngOnInit(): void {
    // this.myform = new FormGroup({
    //   name: new FormGroup({
    //     firstName : new FormControl("", Validators.required),
    //     lastName: new FormControl("",Validators.required)
    //   }),
    //   email: new FormControl("", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    //   password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    //   language: new FormControl()
    // });
   this.CreateFormControls();
   this.CreateForm();
  }  

  CreateFormControls()
  {   
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]);
    this.language = new FormControl('');
  }

  CreateForm()
  {   
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
    }),
    email: this.email,
    password: this.password,
    language: this.language
    });
  }

  OnSubmit()
  {
    console.log(this.myform.value);
    this.myform.reset();
  }

}
