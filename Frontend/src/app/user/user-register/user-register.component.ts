import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private fb: FormBuilder,
              private userSerivce: UserServiceService,
              private alertyfy: AlertifyService) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  passwordMatchingValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {
      notmatched: true}
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null,[Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {Validators: this.passwordMatchingValidator})
  }

  //Getter methods for all form controls
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  userData(): User{
    return this.user = {
      userName: this.userName.value,
      email : this.email.value,
      mobile: this.mobile.value,
      password: this.password.value
    }
  }

  onSubmit(){
    console.log(this.registrationForm);
    this.userSubmitted = true;

    if(this.registrationForm.valid){
      this.user = this.userData( );
      this.userSerivce.addUser(this.user);
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertyfy.success('Congratulations! you are successfully registered');
    }else{
      this.alertyfy.error('Kindly provide the required fields');
    }
  }

}
