import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-faq-solution',
  templateUrl: './faq-solution.component.html',
  styleUrls: ['./faq-solution.component.scss']
})
export class FaqSolutionComponent implements OnInit, AfterViewInit {
  
  question: any = '';
  list: any[] = [];

  constructor(
    public utils: UtilitiesService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.utils.getFAQ().subscribe((data: any) => {
      this.list = data.getFAQResult;
      this.list.forEach(i => { i.asked = Math.floor(Math.random() * Math.floor(721)); });
      this.list = this.list.sort((a, b) => (a.asked < b.asked) ? 1 : -1);
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
      this.question = this.list.filter(i => i.id === id)[0];
      console.log(this.question);
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
