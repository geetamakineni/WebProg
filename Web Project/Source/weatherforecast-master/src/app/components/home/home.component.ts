import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weather: any;
  weatherData;


    constructor(private http: HttpClient) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
       this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Kansas%20City,Missouri&APPID=f6ccf06846f34432b0fcdd57ec7ae65a').subscribe(data => {
        this.weatherData = data;

       });
  }

}
