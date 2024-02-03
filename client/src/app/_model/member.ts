import { Photo } from './photo';

export interface Member {
  id: number;
  userName: string;
  photoUrl: string;
  age: number;
  knownAs: string;
  lastActive: string;
  created: string;
  gender: string;
  introduction: string;
  lookingFor: string;
  interests: any;
  city: string;
  country: string;
  photos: Photo[];
}
