import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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

  constructor(public utils: UtilitiesService, public dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    /* this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => val.length >= 1 ? this.filter(val) : [])
      );
    this.cdr.detectChanges(); */
  }

  /* filter(val: string): any[] {
    return this.options.filter(i => i.question.toLowerCase().includes(val.toLowerCase()));
  } */

  optionSelected(question: any) {
    this.utils.goToSolution(question.questionId);
  }

  createTicket() {
    this.utils.createTicket(this.subject, this.description, this.proirity, this.computerId).subscribe(
      (data) => {
        this.dialog.open(ConfirmationDialogComponent, {
          data: data
        });
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.utils.openSnackBar('Enter all Required Information', null);
      });
  }

}
