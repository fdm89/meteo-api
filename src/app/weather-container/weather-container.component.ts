import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'meteo-api-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit {
cityInput:string = ""
weather!:Weather
date!: Date;

  constructor(private readonly weatherService:WeatherService) { }
  search(){
    this.weatherService.getWeather(this.cityInput).subscribe(response => this.weather = response)
    this.date = new Date()
  }
  ngOnInit(): void {

  }

}
