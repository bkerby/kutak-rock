import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private router: Router) { }

  goToSolution(questionId) {
    this.router.navigate([`solution/${questionId}`])
  }
}
