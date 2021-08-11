import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  cols: any = [];
  values: any = [];
  eventDay: string = '';
  header: string = 'Add Event'
  eventTitle: string = '';
  eventTimeFrom: any;
  eventTimeTo: any;



  constructor(
    private calendarSvc: CalendarService, private modalService: NgbModal
  ) {

  }

  ngOnInit(): void {
    this.cols = [
      { field: 'time', header: '', width: '80px', events: [] },
      { field: 'name', header: 'Monday', width: '80px', events: [] },
      { field: 'category', header: 'Tuesday', width: '80px', events: [] },
      { field: 'quantity', header: 'Wednesday', width: '80px', events: [] },
      { field: 'quantity', header: 'Thursday', width: '80px', events: [] },
      { field: 'quantity', header: 'Friday', width: '80px', events: [] },
      { field: 'quantity', header: 'Saturday', width: '80px', events: [] },
      { field: 'quantity', header: 'Sunday', width: '80px', events: [] },
    ];
    let timeInterval = this.calendarSvc.getTimeInterval();
    debugger;
    this.values = timeInterval;
    // console.log("aaaa", this.values, this.cols)
  }

  saveEvent() {
    debugger;
    let event = { Title: this.eventTitle, timeFrom: this.eventTimeFrom, timeTo: this.eventTimeTo }
    let _day = this.cols.find((x: { header: string; }) => x.header == this.eventDay);
    _day.events.push(event)
    this.modalService.dismissAll();
    console.log(this.cols)
  }

  addEvent(content: any, value: any, row: any) {
    this.eventTitle = '';
    this.eventDay = row.header
    this.eventTimeFrom = value.time;
    this.eventTimeTo = value.time;
    this.modalService.open(content)
  }


}
