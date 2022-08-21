import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule, MatToolbarModule],
    }).compileComponents();
  });

  beforeEach(() => {
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should initially render title 'Waiting to be greeted'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#greeting-message')?.textContent).toEqual(
      'Waiting to be greeted'
    );
  });

  it('should change to a fetched greeting when button clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelector('#greeting-message')?.textContent).toEqual(
      'Waiting to be greeted'
    );
    const btn = compiled.querySelector('#greeting-button') as HTMLButtonElement;
    btn.click();

    const req = httpMock.expectOne(`/api/`);
    expect(req.request.method).toBe('GET');
    req.flush({ greeting: 'Dummy Greeting' });

    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('#greeting-message')?.textContent
    ).toEqual('Dummy Greeting');
  });
});
