import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';
import {
  mockTeamCreationRespone,
  mockTeamsArray,
  mockTeamsResponse,
} from './mock-data';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should return all teams', () => {
    service.getTeams().subscribe((res) => {
      expect(res).toEqual(mockTeamsArray);
    });

    const req = httpMock.expectOne(`/api/teams`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTeamsResponse);
  });

  it('should create a new team', () => {
    const name: string = 'team1';
    const ranking: string = '200';
    service.createTeam(name, ranking).subscribe((res) => {
      expect(res).toEqual({
        name: name,
        ranking: ranking,
        _links: {
          self: {
            href: 'http://localhost:8080/teams/6262818231812096',
          },
          team: {
            href: 'http://localhost:8080/teams/6262818231812096',
          },
        },
      });
    });

    const req = httpMock.expectOne(`/api/teams`);
    expect(req.request.method).toBe('POST');
    req.flush(mockTeamCreationRespone);
  });
});
