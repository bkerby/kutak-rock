import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {
  list: any[] = [];
  searchText = '';

  constructor(public utils: UtilitiesService) {}

  ngOnInit() {
    this.utils.getFAQ().subscribe((data: any) => {
      this.list = data.getFAQResult;
      this.list = this.list.sort((a, b) => (a.count < b.count) ? 1 : -1);
    });
  }

}
