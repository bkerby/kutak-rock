import { Pipe, PipeTransform } from '@angular/core';
import * as ke from 'keyword-extractor';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  keywordList = [];
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    this.keywordList = ke.extract(searchText.toLowerCase(),{
      language:"english",
      remove_digits: false,
      return_changed_case:true,
      remove_duplicates: true
    });

    return items.filter((item) => {
      return this.contains(item.question.toLowerCase(), this.keywordList);
    });
  }

  contains(target, pattern){
    let value = 0;
    pattern.forEach(function(word){
      if (target.includes(word)) value++;
    });
    return (value > 0)
  }
}
