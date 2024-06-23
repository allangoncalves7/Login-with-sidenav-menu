import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formLogin = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {}

  login() {
    if (this.formLogin.invalid) {
      this.formLogin.controls.username.markAsDirty();
      this.formLogin.controls.username.markAllAsTouched();

      this.formLogin.controls.password.markAsDirty();
      this.formLogin.controls.password.markAllAsTouched();

      return;
    }

    const username = this.formLogin.get('username').value;
    const password = this.formLogin.get('password').value;

    this.loginService.login(username, password);
    this.toastr.success('login successful')
    this.router.navigate(['/home']);
  }
}
