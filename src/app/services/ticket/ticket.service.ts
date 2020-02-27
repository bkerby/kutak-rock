import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilitiesService } from '../utilities/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private utils: UtilitiesService) { }

  get(subject: string, description: string, proirity: number, computerId: number) {
    return this.http.get(`Database_Service.svc/CreateTicket/${subject}/${description}/${proirity}/${computerId}`);
  }
}
