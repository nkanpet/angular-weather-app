import { Component } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  data: any[] = [];

  formatDate(date: string) {
    return moment(date).format('dddd');
  }

  convertFahrenheitToCelsius(temperatureInFahrenheit: number) {
    const temperatureInCelsius = (temperatureInFahrenheit - 32) * 5/9;
    return temperatureInCelsius.toFixed(0);
  }

  ngOnInit() {
    axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/3461469?apikey=cfuek8GjLHyhSDxfNAE7upGhiCyE6cwy").then((response) => {
      this.data = response.data.DailyForecasts;
    })
  }
}
