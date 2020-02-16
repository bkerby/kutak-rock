import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { listData } from 'src/app/shared/list';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {
  @ViewChild('searchbar', {static: false}) searchbar: ElementRef;
  list = listData.sort((a, b) => (a.asked < b.asked) ? 1 : -1);
  searchText = '';

  constructor() {}

  ngOnInit() {}

  log(id: number) {
    console.log('Question Clicked: ' + id);
  }

}
