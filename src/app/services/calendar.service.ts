import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  getTimeInterval() {
    var minInteval = 30;
    var times = []; // time array
    var startTime = 0; // start time
    //loop to increment the time and push results in array
    for (var i = 0; startTime < 12 * 60; i++) {
      var hour = Math.floor(startTime / 60);
      var minute = (startTime % 60);
      let body = {
        time: ("0" + (hour)).slice(-2) + ':' + ("0" + minute).slice(-2)
      }

      times.push(body)
      startTime = startTime + minInteval;
    }
    return times

  }

}
