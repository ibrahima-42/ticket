import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TicketResponse } from '../interfaces/login-response.interface';
import { TicketService } from '../../Services/ticket/ticket.service';
import { CommonModule } from '@angular/common';

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

  constructor(
    private ticketService : TicketService,
  ){
  }

  ngOnInit(): void {
    this.affichageTicket();
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

}
