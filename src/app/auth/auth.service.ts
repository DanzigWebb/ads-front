import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {
  }

  login(data: any): Observable<User> {
    return this.http.post<User>('http://localhost:3000/auth/login', data).pipe(
      tap(user => {
        this.saveToken(user.access_token);
        this.user.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/']);
      })
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    this.user.next(null);
    localStorage.clear();
    this.router.navigate(['auth']);
  }

  getTokenFromStorage(): string {
    return localStorage.getItem('token');
  }

  getUserFromStorage(): User | null {
    const savedUser: string = localStorage.getItem('user');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      this.user.next(parsed);
      return parsed;
    }

    return null;
  }
}
