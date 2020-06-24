import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timerproject';
  sub: any;
  mySubscription: Subscription


  todaydate;
  componentproperty;
  emailid;
  formdata;
  countDownDate1: any;


  ngOnInit() {


    this.formdata = new FormGroup({
      date: new FormControl(""),
      month: new FormControl(""),
      year: new FormControl(""),
      hours: new FormControl(""),
      min:new FormControl(""),
      sec:new FormControl(""),
    });

  }
  countDownDate :any;

  now="";
  distance="";
  days="";
  hours="";
  minutes="";
  seconds="";


  k=function(){

    setTimeout (() => {
      this.now = new Date().getTime();
      this.distance = this.countDownDate - this.now;

      this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
    }, 1000);

  }

  onClickSubmit(data) {
    this.countDownDate1=new Date("Jun 23 , 2020 00:00:00")
    this.countDownDate1.setDate(Number("14"));
    this.countDownDate1.setFullYear(Number("2020"));
    this.countDownDate1.setHours(Number("00"));
    this.countDownDate1.setMinutes(Number("00"));
    this.countDownDate1.setSeconds(Number("00"));
    this.countDownDate1.setMonth(Number("11"));

    this.countDownDate=this.countDownDate1.getTime();

    this.mySubscription= interval(1000).subscribe((x =>{
      this.k();
    }));
  }


items = []; // define list of pending items
  comItems = []; // define list of completed items

  // code to push new item
  submitNewItem(event) {
    const index: number = this.items.indexOf(event.taskName);
    if (index !== -1) {
      alert('Item already exists');
    } else {
      this.items.push(event.taskName);
    }
  }

  // code to complete item and push it into complete item list
  completeItem(item: string) {
    const index: number = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.comItems.push(item);
    }
  }

  // code to delete item either from completed or pending items list
  deleteItem(item: string) {
    let index: number = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      index = this.comItems.indexOf(item);
      if (index !== -1) {
        this.comItems.splice(index, 1);
      }
    }
  }

}
