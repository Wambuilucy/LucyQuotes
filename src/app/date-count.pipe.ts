import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(dateInput: any)  {
      // tslint:disable-next-line: prefer-const
    let seconds: any = Math.floor(( new Date() as any - dateInput) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + ' years';
      }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + ' months';
      }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + ' days';
      }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + ' hours';
      }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + ' minutes';
      }
    return Math.floor(seconds) + ' seconds';



  }

}
