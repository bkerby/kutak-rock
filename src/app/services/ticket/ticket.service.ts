import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilitiesService } from '../utilities/utilities.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private utils: UtilitiesService) { }

  get(subject: string, description: string, proirity: number, computerId: number) {
    return from(
      fetch(
        `http://kutakrockwcf.azurewebsites.net/Database_Service.svc/CreateTicket/${subject}/${description}/${proirity}/${computerId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
          mode: 'no-cors'
        }
      )
    )
  }

  get2(subject: string, description: string, proirity: number, computerId: number) {
    return this.http.get(`Database_Service.svc/CreateTicket/${subject}/${description}/${proirity}/${computerId}`);
  }
}
