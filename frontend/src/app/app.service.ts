import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team, TeamListRawResponse, TeamRawResponse } from './app.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<TeamListRawResponse>('/api/teams').pipe(
      map((data) =>
        data._embedded.teams.map((data) => {
          return { name: data.name, ranking: data.ranking };
        })
      )
    );
  }

  createTeam(name: string, ranking: string): Observable<TeamRawResponse> {
    return this.http.post<TeamRawResponse>('/api/teams', {
      name: name,
      ranking: ranking,
    });
  }
}
