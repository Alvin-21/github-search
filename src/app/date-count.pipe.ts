import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): string {
    let today: any = new Date();
    let createdDate: any = new Date(value);
    var dateDifference = Math.abs(today - createdDate);
    const secondsInDay = 86400;
    var dateInSeconds = dateDifference * 0.001;
    var dateInDays = Math.floor(dateInSeconds / secondsInDay);

    return dateInDays + " days";
  }
  
}
