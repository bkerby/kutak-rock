import { Injectable, isDevMode, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Shared } from 'src/app/shared/shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService implements OnInit {

  constructor(private router: Router, private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {
  }

  /* REST Service call functions */
  createTicket(subject: string, description: string, proirity: number, computerId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.get(`${Shared.baseUrl}/CreateTicket/${subject}/${description}/${proirity}/${computerId}`);
  }

  getFAQ() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.get(`${Shared.baseUrl}/GetFAQ`);
  }

  /* Helper Navigation Functions */
  goToSolution(questionId) {
    this.router.navigate([`solution/${questionId}`]);
  }

  goToHome() {
    this.router.navigate([`home`]);
  }

  /* Helper Functions */
  objectToString(obj: any): string {
    return JSON.stringify(obj);
  }

  openSnackBar(msg: string, act: string) {
    this.snackBar.open(msg, act);
  }

  isLocal() {
    return isDevMode();
  }
}
