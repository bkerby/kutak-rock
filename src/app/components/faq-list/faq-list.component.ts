import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { listData } from 'src/app/shared/list';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {
  list = listData.sort((a, b) => (a.asked < b.asked) ? 1 : -1);
  searchText = '';

  constructor(public utils: UtilitiesService) {}

  ngOnInit() {
    this.utils.getFAQ().subscribe((data) => {
      console.log(data);
    });
  }

}
