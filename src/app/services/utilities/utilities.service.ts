import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Shared } from 'src/app/shared/shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private router: Router, private snackBar: MatSnackBar, private http: HttpClient) { }

  /* REST Service call functions */

  createTicket2(subject: string, description: string, proirity: number, computerId: number) {
    return from(
      fetch(
        `${Shared.baseUrl}/CreateTicket/${subject}/${description}/${proirity}/${computerId}`,
        {
          headers: {
          },
          method: 'GET',
          mode: 'no-cors'
        }
      )
    );
  }

  createTicket(subject: string, description: string, proirity: number, computerId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.get(`${Shared.baseUrl}/CreateTicket/${subject}/${description}/${proirity}/${computerId}`);
  }

  /* Helper Navigation Functions */

  goToSolution(questionId) {
    this.router.navigate([`solution/${questionId}`]);
  }

  /* Helper Functions */

  objectToString(obj: any): string {
    return JSON.stringify(obj);
  }

  openSnackBar(msg: string, act: string) {
    this.snackBar.open(msg, act);
  }
}
