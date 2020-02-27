import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  goToSolution(questionId) {
    this.router.navigate([`solution/${questionId}`])
  }

  objectToString(obj: any): string {
    return JSON.stringify(obj);
  }

  openSnackBar(msg: string, act: string) {
    this.snackBar.open(msg, act);
  }
}
