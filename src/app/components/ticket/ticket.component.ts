import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  list: any[] = [];
  options: any[] = [];
  subject = '';
  description = '';
  proirity = 2;
  myControl: FormControl = new FormControl();
  waitingForResponse = false;
  confirmationDialogRef: MatDialogRef<ConfirmationDialogComponent>;

  constructor(public utils: UtilitiesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.utils.getFAQ().subscribe((data: any) => {
      this.list = data.getFAQResult;
      this.options = this.list.sort((a, b) => (a.asked < b.asked) ? 1 : -1);
    });
  }

  optionSelected(question: any) {
    this.utils.goToSolution(question.id);
  }

  createTicket() {
    this.waitingForResponse = true;
    this.utils.getIPInfo().subscribe((publicIP: any) => {
      this.utils.getMachineId(publicIP.ip).subscribe((machineId: any) => {
        if (machineId.GetComputerResult === 1) {
          this.utils.openSnackBar('Computer doesn\'t exist in database', null);
        }
        this.utils.createTicket(this.subject, this.description, this.proirity, machineId.GetComputerResult).subscribe(
          (ticketId: any) => {
            this.utils.sendTicket(parseInt(ticketId.createTicketResult)).subscribe(
              (result: any) => {
                this.confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
                  data: result
                });
                this.confirmationDialogRef.afterClosed().subscribe(() => {
                  this.clear();
                  this.utils.goToHome();
                });

                this.waitingForResponse = false;
              },
              (error) => {
                console.error(error);
                this.waitingForResponse = false;
                this.utils.openSnackBar('Error: please try again', null);
              });
          },
          (error) => {
            console.error(error);
            this.waitingForResponse = false;
            this.utils.openSnackBar('Error: please try again', null);
          });
      });
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
