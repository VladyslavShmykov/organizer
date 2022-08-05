import {AbstractControl, ValidationErrors} from '@angular/forms';

const EMAIL_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function appEmailValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value === null || control.value === '') {
    return null;  // don't validate empty values to allow optional controls
  }

  return EMAIL_PATTERN.test(control.value) ? null : {'email': true};
}
