import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter'
})
export class AppFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, property:string, subProperty:string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it[property][subProperty].toLowerCase().includes(searchText);
    });
   }
}
