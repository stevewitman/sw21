import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://api.nps.gov/api/v1';
const MODEL = 'parks';
const API_KEY = '&api_key=HHnMMu4jZCSfxlLugNhmhoIbHkgUUVpKXCPqH3fw'

@Injectable({
  providedIn: 'root'
})
export class ParksService {

  constructor(private http: HttpClient) { }

  all(): Observable<any> {
    return this.http.get(this.getUrl());
  }

  private getUrl(): string {
    return `${BASE_URL}/${MODEL}${API_KEY}`;
  }

}
