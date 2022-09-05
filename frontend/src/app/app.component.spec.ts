import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AppModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render title 'Motivators'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title')?.textContent).toEqual('Motivators');
  });

  it('should change to a fetched greeting when button clicked', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    const btn = compiled.querySelector('#update-button') as HTMLButtonElement;
    spyOn(component, 'getTeams');
    btn.click();
    tick();
    expect(component.getTeams).toHaveBeenCalled();
  }));
});
