import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(seconds?: number): string {
    if (!seconds) return '0s';
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    let timeText = "";
    if (minutes < 10) {
      timeText += `0${minutes} and`
    } else {
      timeText += `${minutes} and `
    }

    if (sec < 10) {
      timeText += `0${sec} ago`
    } else {
      timeText += `${sec} ago`
    }
    return timeText;
  }

}
