import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { listData } from 'src/app/shared/list';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {
  @ViewChild('searchbar') searchbar: ElementRef;
  list = listData.sort((a, b) => (a.asked < b.asked) ? 1 : -1);
  searchText = '';

  constructor(public utils: UtilitiesService) {}

  ngOnInit() {}

}
