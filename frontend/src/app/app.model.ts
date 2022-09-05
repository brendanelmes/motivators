export interface Team {
  name: string;
  ranking: string;
}

export interface TeamListRawResponse {
  _embedded: {
    teams: Team[];
  };
}

export interface TeamRawResponse {
  name: string;
  ranking: string;
  _links: {
    self: {
      href: string;
    };
    team: {
      href: string;
    };
  };
}
