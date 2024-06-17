import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('/api/login', { username, password }).pipe(
      map((response: any) => response)
    );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post('/api/register', { email, password }).pipe(
      map((response: any) => response)
    );
  }
}
