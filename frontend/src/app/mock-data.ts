export const mockTeamsResponse = {
  _embedded: {
    teams: [
      {
        name: 'team1',
        ranking: '150',
        _links: {
          self: {
            href: 'http://localhost:8080/teams/1',
          },
          team: {
            href: 'http://localhost:8080/teams/1',
          },
        },
      },
      {
        name: 'team2',
        ranking: '100',
        _links: {
          self: {
            href: 'http://localhost:8080/teams/2',
          },
          team: {
            href: 'http://localhost:8080/teams/2',
          },
        },
      },
    ],
  },
};

export const mockTeamsArray = [
  {
    name: 'team1',
    ranking: '150',
  },
  {
    name: 'team2',
    ranking: '100',
  },
];

export const mockTeamCreationRespone = {
  name: 'team1',
  ranking: '200',
  _links: {
    self: {
      href: 'http://localhost:8080/teams/6262818231812096',
    },
    team: {
      href: 'http://localhost:8080/teams/6262818231812096',
    },
  },
};
