import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../Planet';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GetPlanetInfoService {
  private apiUrl: string;
  currentEnvironment !: string
  rapidKey: string

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.apiUrl = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets`;
    this.rapidKey = environment.RAPID_KEY;
    console.log(this.rapidKey)
  }

  getPlanetById(id: string): Observable<Planet> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.rapidKey,
      'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    });

    const searchUrl = `${this.apiUrl}/${id}`;

    return this.http.get<Planet>(searchUrl, { headers });
  }
}
