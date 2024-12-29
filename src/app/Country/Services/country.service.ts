import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CapitalI } from '../Interfaces/Capital';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient:HttpClient) { }

  // search by capitality

  SearchByCapitality(value:string):Observable<CapitalI>{
    return this.httpClient.get<CapitalI>(`${environment.apiBase}capital/${value}`);
  }


  // search by region

  SearchByRegion(query:string):Observable<CapitalI>{
    return this.httpClient.get<CapitalI>(`${environment.apiBase}region/${query}`);
  }

    // search by countrie

    SearchByCountrie(query:string):Observable<CapitalI>{
      return this.httpClient.get<CapitalI>(`${environment.apiBase}translation/${query}`);
    }


}
