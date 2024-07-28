import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm = new FormGroup({
    usernameControl: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
    passwordControl: new FormControl<string>('', { validators: Validators.required, nonNullable: true })
  })

  get usernameControl(): FormControl<string> {
    return this.loginForm.controls.usernameControl
  }
  get passwordControl(): FormControl<string> {
    return this.loginForm.controls.passwordControl
  }
}
