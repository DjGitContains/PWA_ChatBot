import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResponseData{
 name: string;
 description: string;
 url: string;
 html: string;
 markdown: string;
}
@Injectable({
 providedIn: 'root'
})
export class ApiService {
 private baseURL = 'https://www.techiediaries.com/api/data.json';
 constructor(private httpClient: HttpClient) { }
 fetch(): Observable<ResponseData[]> {
 return this.httpClient.get(this.baseURL) as Observable<ResponseData[]>;
 }
}