import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Greeting } from './greeting.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  greeting: string = 'Waiting to be greeted';

  public getGreeting(): void {
    this.http
      .get<Greeting>('/api/')
      .pipe(
        tap((res) => {
          this.greeting = res.greeting;
        })
      )
      .subscribe();
  }
}
