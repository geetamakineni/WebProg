import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  title = 'weather';
  weatherData;
  temperature;
  forecastData;
  cityNameAlert = false;
  apiNotFoundError = false;
  apiServerError = false;
  stroreopt: any;
  options: any;
  selectedValue: any;
  citydata: any;
  cityoptions: any;
  selections: any;
  selectionValue: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.weatherService.getstates().subscribe( res => {
      this.stroreopt = res;
      console.log('forecast data......', this.stroreopt.state_name);
    this.options =  this.stroreopt.state_name;
    this.selectedValue = this.options[0];
    }, error => {
      console.log('error....', error);
    });


  }
  onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    this.weatherService.getcities(value).subscribe( (res: any) => {
      console.log('forecast data......', value);
      this.citydata = res;
      this.selections = this.citydata.city_name;
   //   this.selectionValue=this.selections[0];
    }, error => {
      console.log('error....', error.status);
    });

}

onSelectionSelected(value: string) {
this.onWeather(value, this.selectedValue);
}
  onWeather(city, state) {
    if (city == undefined || city == '') {
      this.cityNameAlert = true;
      setInterval(() => {
        this.cityNameAlert = false;
      }, 5000);
    } else {
      console.log('dsadadasdsa.........', city, state);
      this.weatherService.getWeather(city, state).subscribe( data => {
        this.weatherData = data;
        console.log('Data..............', data);
        this.onHourlyForecast(city, state);
      }, error => {
        console.log('error....', error);
        if (error.status === 404) {
          this.apiNotFoundError = true;
          setInterval(() => {
            this.apiNotFoundError = false;
          }, 5000);
        } else if (error.status === 500) {
          this.apiServerError = true;
          setInterval(() => {
            this.apiServerError = false;
          }, 5000);
        }
      });
    }
  }

  onHourlyForecast(city, state) {
    this.weatherService.getForecast(city, state).subscribe( res => {
      console.log('forecast data......', res);
      this.forecastData = res;
    }, error => {
      console.log('error....', error.status);
    });
  }

  tryNewCity() {
    this.weatherData = null;
    this.forecastData = null;
  }
}
