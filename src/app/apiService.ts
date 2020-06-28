import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { ModelMapper } from './modelMapper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiRoot = '/api';

  constructor(
    private http: HttpClient
  ) {}


 public get<T>(url: string, itemType: any): Observable<T> {
    if (!url) {
      return;
    }

    return this.http.get<T>(url)
      .pipe(
        map(data => data.map((item: any) => {
          return new ModelMapper(itemType).map(item);
        }
      ))
    );
  }
}