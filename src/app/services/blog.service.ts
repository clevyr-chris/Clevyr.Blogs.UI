import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Blog } from "../models/blog";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseApiUrl = 'https://localhost:7077/';

  constructor(private http: HttpClient) { }

  get(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.baseApiUrl + 'blogs');
  }

}
