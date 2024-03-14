import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ClientRegisterDto } from 'src/app/dtos/client-register-dto';
import { ClientViewDto } from 'src/app/dtos/client-view-dto';
import { DataAdvancedSearch } from 'src/app/dtos/data-advanced-search';
import { MainResponseDto } from 'src/app/dtos/main-response-dto';
import { ClientService } from 'src/app/services/client-service.service';

@Component({
  selector: 'clients-views',
  templateUrl: './clients-views.component.html',
  styleUrls: ['./clients-views.component.scss']
})
export class ClientsViewsComponent implements OnInit {

  clients: ClientViewDto[] = [];
  
  sharedKeySearch: string = "";
  cssInputSharedKey = 'form-control me-2';
  hiddenErrorSharedKey = true;

  activateHiddenFormAdvancedSearch: Boolean = true;
  isAConsult: string = 'Search';
  

  ngOnInit(): void {
    this.getAll();
  }

  constructor(private clienSvc: ClientService) { }

  clearListClients(): void {
    this.clients = [];
  }

  countCaracteresSharedKey(capture: any): void {
    if(this.sharedKeySearch.length > 3) {
      this.hiddenErrorSharedKey = true;
      this.cssInputSharedKey = 'form-control me-2';
    } 
  }

  validateSharedKey(): Boolean {
    if(this.sharedKeySearch.length < 4) {
      this.cssInputSharedKey = 'form-control inputError';
      return false;
    } else {
      this.cssInputSharedKey = 'form-control me-2';
      return true;
    }
  }

  getBySharedKey(): void {
    if(this.sharedKeySearch.length > 0 && this.sharedKeySearch.length < 4) {
      this.hiddenErrorSharedKey = false;
    }
    if (this.sharedKeySearch.length > 0 && this.validateSharedKey()) {
      this.clearListClients();
      this.clienSvc.getBySharedKey(this.sharedKeySearch).subscribe((data: MainResponseDto) => {
        if (data.response != null) {
          this.clients.push(data.response);
        } else {
          console.log('Client not found..!')
          this.getAll();
        }
      },
        (data: HttpErrorResponse) => {
          if (data.status == 0) {
            console.log('Back does not respond...!');
          }
        });
    } else {
      this.getAll();
    }
    this.sharedKeySearch = '';
  }

  getAdvencedSearch(client: ClientRegisterDto): void {
    this.clienSvc.getAdvencedSearch(client).subscribe((data: MainResponseDto) => {
      if (data.response != null) {
        this.clearListClients();
        this.clients.push(data.response);
      } else {
        console.log('Client not found..!')
        this.getAll();
      }
    },
      (data: HttpErrorResponse) => {
        if (data.status == 0) {
          console.log('Back does not respond...!');
        }
      });
  }

  actionDesactivateHiddenFormAdvancedSearch(data: DataAdvancedSearch): void {
    this.activateHiddenFormAdvancedSearch = data.actionHidden;
    this.getAdvencedSearch(data.clientViewDto);
  }

  actionActivateHiddenFormAdvancedSearch(): void {
    this.activateHiddenFormAdvancedSearch = false;
  }

  searchSharedKey(): void {
    this.getBySharedKey();
  }

  getAll(): void {
    this.clienSvc.getAll().subscribe((data: MainResponseDto) => {
      this.clients = data.response;
    },
      (data: HttpErrorResponse) => {
        if (data.status == 0) {
          console.log('Back no responde...!');
        }
      });
  }

}
