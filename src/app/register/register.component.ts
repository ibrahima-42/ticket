import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthentificationService } from '../../Services/auth/authentification.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginResponse } from '../interfaces/login-response.interface';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
register!: FormGroup;

  constructor(
    private fb : FormBuilder,
    private authService : AuthentificationService,
    private route: Router
  ){}

  ngOnInit(): void {
    this.register = this.fb.group({
      nomComplete: ['',Validators.required],
      telephone: ['', Validators.required],
      email: ['',Validators.required,],
      password : ['' ,Validators.required]
    })
  }

  Registe(): void {
    if(this.register.valid){
      this.authService.Register(
        this.register.value.nomComplete ,
        this.register.value.email,
        this.register.value.password,
        this.register.value.telephone
      ).subscribe({
        next: (response: any) => {
          // Vérifiez la structure exacte de la réponse
          console.log('Réponse complète :', response);
          
          // Ajustez en fonction de la structure réelle de la réponse
          const token = response.accessToken || response.data?.accessToken;
          
          if (token) {
            localStorage.setItem('token', token);
            console.log('Inscription réussie', response);
            this.route.navigate(['/login']);
          } else {
            console.error('Aucun token trouvé dans la réponse');
            alert('Erreur lors de la récupération du token');
          }
        },
        error: (error) => {
          console.error('Erreur lors de l\'inscription', error);
          alert('Erreur lors de l\'inscription');
        }
      })
    }
  }
}
