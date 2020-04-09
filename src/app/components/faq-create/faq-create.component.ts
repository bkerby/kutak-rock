import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-faq-create',
  templateUrl: './faq-create.component.html',
  styleUrls: ['./faq-create.component.scss']
})
export class FaqCreateComponent implements OnInit {

  subject = '';
  description = '';
  waitingForResponse = false;
  answers: any[] = [''];
  myControl: FormControl = new FormControl();

  constructor(public utils: UtilitiesService) { }

  ngOnInit(): void {
  }

  log(str) {
    console.log(str);
  }

  addAnswer() {
    this.answers.push('');
  }

  removeAnswer() {
    if (this.answers.length > 1) {
      this.answers.pop();
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  submitFAQ() {
    this.utils.createFAQ(this.subject, this.description).subscribe(
      (data: any) => {
        console.log(data);
        this.answers.forEach((a) => {
          this.utils.createFAQAnswer(data.createFAQResult, a).subscribe(
            (data) => { console.log(data) },
            (error) => { this.utils.openSnackBar('Error: Try again later', null); }
          );
        });
      },
      (error) => { this.utils.openSnackBar('Error: Try again later', null); }
    );
  }

  clear() {
    this.subject = '';
    this.description = '';
    this.answers = [''];
  }

}
