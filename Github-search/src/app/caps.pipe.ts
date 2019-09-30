import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caps'
})
export class CapsPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
        return value;
    }
    return value.replace(/\w\S*/g, function (str) {
        return str.charAt(0).toLowerCase() + str.substr(1).toUpperCase();
    });
}
}
