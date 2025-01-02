import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthentificationService } from '../../Services/auth/authentification.service';
import { LoginResponse } from '../interfaces/login-response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  isSumbit = false;
  errors : string[] = [];

  logins!: FormGroup;

  constructor(
    private fb : FormBuilder,
    private authService: AuthentificationService,
    private route: Router
  ){

  }

  ngOnInit(): void {
    this.logins = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',Validators.required ]
    })
  }

  onSubmit():void {
    this.isSumbit = true;
    if(this.logins.valid){
      this.login();
    }else {
      this.errors = ['Tous les champs doivent etre remplis'];
    }
  }

  login():void {
    if(this.logins.valid){
      this.authService.Login(this.logins.value.email, this.logins.value.password).subscribe(
        (data: LoginResponse) => {
          localStorage.setItem('token', data.token);
          console.log(data);
          this.route.navigate(['/home']);
        },
        (error) => {
          console.log(error);
          alert('Erreur de connection');
        }
      )
    }
  }

}
