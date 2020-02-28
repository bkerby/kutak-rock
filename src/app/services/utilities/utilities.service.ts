import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Shared } from 'src/app/shared/shared';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  /* REST Service call functions */

  createTicket(subject: string, description: string, proirity: number, computerId: number) {
    return from(
      fetch(
        `${Shared.baseUrl}/CreateTicket/${subject}/${description}/${proirity}/${computerId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
          mode: 'no-cors'
        }
      )
    );
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
