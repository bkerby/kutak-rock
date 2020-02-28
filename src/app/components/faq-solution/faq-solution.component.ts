import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { listData } from 'src/app/shared/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq-solution',
  templateUrl: './faq-solution.component.html',
  styleUrls: ['./faq-solution.component.scss']
})
export class FaqSolutionComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }
  question: any = '';

  ngOnInit() {
  }

  ngAfterViewInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.question = listData.filter(i => i.questionId === id)[0];
    this.cdr.detectChanges();
  }
}
