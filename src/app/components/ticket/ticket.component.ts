import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { listData } from 'src/app/shared/list';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  options = listData.sort((a, b) => (a.asked < b.asked) ? 1 : -1);
  subject = '';
  description = '';
  proirity = 0;
  computerId = 6;
  myControl: FormControl = new FormControl();
  waitingForResponse = false;
  confirmationDialogRef: MatDialogRef<ConfirmationDialogComponent>;

  constructor(public utils: UtilitiesService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  optionSelected(question: any) {
    this.utils.goToSolution(question.questionId);
  }

  createTicket() {
    this.waitingForResponse = true;
    this.utils.createTicket(this.subject, this.description, this.proirity, this.computerId).subscribe(
      (response) => {
        this.confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
          data: response
        });
        this.confirmationDialogRef.afterClosed().subscribe(() => {
          this.clear();
          this.utils.goToHome();
        });
        console.log(response);
        this.waitingForResponse = false;
      },
      (error) => {
        console.log(error);
        this.waitingForResponse = false;
        this.utils.openSnackBar('Error: please try again', null);
      });
  }

  isFormVerified(): boolean {
    return this.subject !== '' && this.description !== '';
  }

  clear() {
    this.subject = '';
    this.description = '';
  }

}
