import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { listData } from 'src/app/shared/list';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { MatDialog } from '@angular/material/dialog';
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
  filteredOptions: Observable<string[]>;

  constructor(public utils: UtilitiesService, private ticketService: TicketService, public dialog: MatDialog) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => val.length >= 1 ? this.filter(val) : [])
      );
  }

  filter(val: string): any[] {
    return this.options.filter(i => i.question.toLowerCase().includes(val.toLowerCase()));
  }

  optionSelected(question: any) {
    this.utils.goToSolution(question.questionId);
  }

  createTicket() {
    this.ticketService.get(this.subject, this.description, this.proirity, this.computerId).subscribe(
      (data) => {
        this.dialog.open(ConfirmationDialogComponent);
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.utils.openSnackBar('Enter all Required Information', null)
      });
  }

}
