import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth/auth.service";
import {appEmailValidator} from "../../../lib/validators";

type signType = 'sign In' | 'sign Up';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public signType: signType = 'sign In';
  public credentialsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  public get messageText(): string {

    switch (this.signType) {
      case "sign In": {
        return 'If you do not have an account, please Sign Up';
      }
      case "sign Up": {
        return 'If you already have an account, please Sign In';
      }
      default: {
        return '';
      }
    }
  }

  public get emailErrorText(): string {
    const errors = this.credentialsForm.controls['email'].errors;

    if (errors) {
      if (errors['required']) {
        return 'enter your email';
      }
      if (errors['email']) {
        return 'email invalid';
      }
    }

    return '';
  }

  public get passwordErrorText(): string {
    const errors = this.credentialsForm.controls['pass'].errors

    if (errors) {
      if (errors['required']) {
        return 'enter your password'
      }
      if (errors['minlength']) {
        return `min length is ${errors['minlength'].requiredLength}, now is ${errors['minlength'].actualLength}`
      }
    }

    return '';
  }

  ngOnInit(): void {
    this.initForm();
  }

  public async onSubmit() {
    const {email, pass} = this.credentialsForm.value;

    switch (this.signType) {

      case "sign In": {
        await this.authService.signIn(email, pass);
        break;
      }

      case "sign Up": {
        await this.authService.signUp(email, pass);
        break;
      }
    }
  }

  public changeMethod() {
    this.signType = this.signType === 'sign In' ? 'sign Up' : 'sign In';
  }

  private initForm(): FormGroup {
    return this.credentialsForm = this.fb.group({
      email: new FormControl('', [Validators.required, appEmailValidator]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
}
