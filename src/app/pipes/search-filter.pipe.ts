import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: Array<any>, search: string): Array<any> {
    let finalArray: Array<any> = new Array<any>();
  	items.forEach(item => {
	  	if(item.title.includes(search)) {
	  		finalArray.push(item);
	  	}
	  	else {
	  		finalArray.forEach(filteredItem => {
	  			if(item.parent_id === filteredItem.id) {
	  				finalArray.push(item);
	  			}
	  		})
	  	}
  	});
  	return finalArray;
  }
}
