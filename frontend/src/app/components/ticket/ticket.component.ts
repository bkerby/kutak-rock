import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { listData } from 'src/app/shared/list';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  options = listData.sort((a, b) => (a.asked < b.asked) ? 1 : -1);
  searchText = '';
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(public utils: UtilitiesService) { }

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

}
