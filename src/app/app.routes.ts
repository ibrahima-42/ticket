import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TicketComponent } from './ticket/ticket.component';
import { ShopComponent } from './shop/shop.component';

export const routes:
  Routes = [
    {path :'', component: RegisterComponent},
    {path :'acceuil', component: AcceuilComponent},
    {path :'login', component: LoginComponent},
    {path: 'home' , component: AcceuilComponent},
    {path: 'ticket' , component: TicketComponent},
    {path: 'shop' , component: ShopComponent}
  ];
