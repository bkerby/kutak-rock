import { Component, OnInit } from '@angular/core';
import { listData } from 'src/app/shared/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq-solution',
  templateUrl: './faq-solution.component.html',
  styleUrls: ['./faq-solution.component.scss']
})
export class FaqSolutionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  question: any = '';

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.question = listData.filter(i => i.questionId === id)[0];
  }
}
