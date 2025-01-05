import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthentificationService } from '../../Services/auth/authentification.service';


@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(
    private logoutService : AuthentificationService,
    private route : Router
  ){ }

  logout(){
    this.logoutService.Logout().subscribe({
      next: () => {
        console.log('logged out');
        this.route.navigate(['/login'])
      },
      error: (error) => {
        console.error('Erreur lors de la deconnexion', error);
        //nettoyer et rediriger meme en cas d'erreur
        this.route.navigate(['/login'])
      }
    })
  }
}
