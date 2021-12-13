import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http:HttpClient) { }
  getWeather(city:string): Observable<Weather>{
    const params = new HttpParams()
    .set('q', city)
    .set("units", "metric")
    .set("appId", environment.apiKey)
    return this.http.get<Weather>(environment.apiUrl + "weather", {params})

  }
}
