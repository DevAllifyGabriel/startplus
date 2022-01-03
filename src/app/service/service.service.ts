import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url: string = 'https://61c4d33af1af4a0017d99808.mockapi.io/starPlus';

  constructor(private http: HttpClient) {}

  get apiBrowse(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => res)
    );
  }
}
