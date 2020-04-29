import { Injectable, isDevMode, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Shared } from 'src/app/shared/shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'aJt5o3jQPOnkNuycYiuArPBPpPjwEHaR'
    })
  };

  constructor(private router: Router, private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {
  }

  /* REST Service call functions */
  getMachineId(ip: string) {
    return this.http.get(`${Shared.baseUrl}/GetComputer/${ip}`, this.httpOptions);
  }

  createTicket(subject: string, description: string, proirity: number, computerId: number) {
    return this.http.get(`${Shared.baseUrl}/CreateTicket/${subject}/${description}/${proirity}/${computerId}`, this.httpOptions);
  }

  getFAQ() {
    return this.http.get(`${Shared.baseUrl}/GetFAQ`, this.httpOptions);
  }

  createFAQ(subject: string, description: string) {
    return this.http.get(`${Shared.baseUrl}/CreateFAQ/${subject}/${description}`, this.httpOptions);
  }

  createFAQAnswer(id: number, answer: string) {
    return this.http.get(`${Shared.baseUrl}/CreateFAQAnswer/${id}/${answer}`, this.httpOptions);
  }

  getIPInfo() {
    return this.http.get(`https://ipinfo.io/json?token=922dd49b9f853e`);
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
