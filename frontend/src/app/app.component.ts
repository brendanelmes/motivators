import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Team } from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  teams$: Observable<Team[]> = of([]);

  ngOnInit(): void {
    this.getTeams();
  }

  public getTeams(): void {
    this.teams$ = this.appService.getTeams();
  }

  public createTeam(name: string, ranking: string): void {
    this.appService.createTeam(name, ranking).subscribe();
  }
}
