import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

export const routes:
  Routes = [
    {path :'', component: RegisterComponent},
    {path :'login', component: LoginComponent},
    {path: 'home' , component: AcceuilComponent}
  ];
