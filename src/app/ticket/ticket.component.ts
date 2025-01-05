import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Category, TicketResponse } from '../interfaces/login-response.interface';
import { TicketService } from '../../Services/ticket/ticket.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-ticket',
  imports: [
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  tickets: TicketResponse[] = [];
  showCategory : boolean = false;
  category : Category[] =[];

  constructor(
    private ticketService : TicketService,
  ){
  }


  ngOnInit(): void {
    this.affichageTicket();
    this.allcat();
    // this.categoryChoice();
  }

  
  CategoryView(): void {
    this.showCategory = !this.showCategory;
  }

  affichageTicket(): void {
    this.ticketService.showTicket().subscribe(
      (response) => {
        console.log('response', response);
        this.tickets = response;
      },(error)=>{
        console.log('Erreur l`ors de laffichage des ticket');
        alert(`Erreur l'or  de l'affichage des tickets`)
      }
    )
  }

  categoryChoice(categoryName: string): void {
    this.ticketService.categoryConcert(categoryName).subscribe(
      (response) => {
      console.log('response category',response);
      this.tickets = response;
      },(error) => {
        console.log('Erreur lor de la recuperation des categories');
        alert('Erreur lor de la recuperation des categories');
      }
    )
}

  allcat(): void {
    this.ticketService.allCategory().subscribe(
      (response) => {
        console.log('list all category', response);
        this.category = response;
      },
      (error) => {
        console.log('Erreur recuperation de la liste des category');
        alert('Erreur recuperation de la liste des category;')
      }
    )
  }
}
