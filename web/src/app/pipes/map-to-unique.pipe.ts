import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToUnique'
})
export class MapToUniquePipe implements PipeTransform {

  transform(items: any[], key: string): any[] {
    const seen = new Set();
    return items.filter(item => {
      const val = item[key]?.toLowerCase().trim();
      if (seen.has(val)) return false;
      seen.add(val);
      return true;
    });
  }

}
