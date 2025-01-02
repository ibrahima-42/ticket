import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthentificationService } from '../../Services/auth/authentification.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


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
        this.register.value.telephone,
      ).subscribe(
          (data)=>{
            console.log('register sucess',data);
            this.route.navigate(['/login']);
          },
          (error)=>{
            console.log('erreur l`ors de register',error);
            alert(`Erreur de resgiter`);
          }
        )
    }
  }
}
