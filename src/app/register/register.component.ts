import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthentificationService } from '../../Services/auth/authentification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
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
        this.register.value.nomComplete , this.register.value.telephone, this.register.value.email ,this.register.value.password).subscribe(
          (data)=>{
            console.log('register sucess',data);
            alert(`register sucess`);
          },
          (error)=>{
            console.log('erreur l`ors de register',error);
            alert(`Erreur de resgiter`);
          }
        )
    }
  }
}
