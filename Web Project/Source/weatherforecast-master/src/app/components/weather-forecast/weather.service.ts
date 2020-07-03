import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f6ccf06846f34432b0fcdd57ec7ae65a';
  constructor(private http: HttpClient) { 
    
   }

  getWeather(city,state) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + state +'&APPID=a526223f9861461bda98b591c8fffaf7');
  }

  getForecast(city,state) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + state +'&APPID=a526223f9861461bda98b591c8fffaf7');
  }

  getstates() {
    return this.http.get('http://localhost:5000/state');
  }

  getcities(city:string) {
    return this.http.get('http://localhost:5000/city/'+city);
  }

  
}
