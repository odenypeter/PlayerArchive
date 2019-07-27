export interface Player {
  id: string;
  active: boolean;
  'profile-id': string;
  profile: {
    age: number;
    role: string;
    team: string;
    picture: any;
  };
  stats: any;
}
