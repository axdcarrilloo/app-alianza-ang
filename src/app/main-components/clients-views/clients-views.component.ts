import { Component, OnInit } from '@angular/core';
import { ClientRegisterDto } from 'src/app/dtos/client-register-dto';

@Component({
  selector: 'clients-views',
  templateUrl: './clients-views.component.html',
  styleUrls: ['./clients-views.component.scss']
})
export class ClientsViewsComponent implements OnInit{
  
  clients: ClientRegisterDto[] = [];
  sharedKeySearch:string = "";
  activateHiddenFormAdvancedSearch: Boolean = true;
  isAConsult: string = 'Search';

  ngOnInit(): void {
    this.clients = this.loadClients();
  }

  constructor() {}

  actionDesactivateHiddenFormAdvancedSearch(response: Boolean): void {
    this.activateHiddenFormAdvancedSearch = response;
  }

  actionActivateHiddenFormAdvancedSearch(): void {
    this.activateHiddenFormAdvancedSearch = false;
  }

  searchSharedKey(): void {
    console.log(this.sharedKeySearch)
  }

  loadClients(): ClientRegisterDto[] {
    this.clients.push(new ClientRegisterDto("Yoal", "email@", "3214744", new Date(), new Date()));
    this.clients.push(new ClientRegisterDto("Mari", "mari@", "3114741", new Date(), new Date()));
    return this.clients;
  }

}
