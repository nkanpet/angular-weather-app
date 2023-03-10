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
  headline: any = {};
  activeItem: any = null;

  formatDate(date: string, format: string) {
    return moment(date).format(format);
  }

  convertFahrenheitToCelsius(temperatureInFahrenheit: number) {
    const temperatureInCelsius = (temperatureInFahrenheit - 32) * 5/9;
    return temperatureInCelsius.toFixed(0);
  }

  onActive(item: any) {
    this.activeItem = item;
  }

  ngOnInit() {
    axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/3461469?apikey=cfuek8GjLHyhSDxfNAE7upGhiCyE6cwy").then((response) => {
      this.headline = response.data.Headline;
      this.data = response.data.DailyForecasts;
      this.activeItem = this.data[0]
    })
  }
}
