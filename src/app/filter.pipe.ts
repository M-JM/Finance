import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter',
})
@Injectable()

export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }

        return items.filter(singleItem =>
            singleItem[field].toLowerCase().includes(value.toLowerCase())
        );
    }
}

/* problem : the filter creates a new array where only the elements that passes the test.
this causes the onclick for passing the values of the Array Bonds in the Buycomponent
 to use the index of original array bonds and not filteredarray 
 
 => additionally due to performance issues ; a pipe gets called constantly 
 Angular 2+ has removed this functionality vs. AngularJS

 proper pratice is to declare a filter function on component.

 Due to not being able to actually make the filter function work i solved the problem by populating my inputfield
  from buybond by selecting on click bond instead of using the index to track which was clicked
 
this method will cause huge perf. issues on big arrays.!!!!

 */
