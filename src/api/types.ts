import { AxiosResponse } from 'axios';

export type AxiosResponseSuccess<Data> = Promise<AxiosResponse<Data>>;

export type GetCharacterResponseSuccess = {
  species: [];
  url: string;
  name: string;
  mass: string;
  height: string;
  gender: string;
  edited: string;
  films: string[];
  created: string;
  eye_color: string;
  homeworld: string;
  hair_color: string;
  skin_color: string;
  birth_year: string;
  vehicles: string[];
  starships: string[];
};

export type SWCharacter = GetCharacterResponseSuccess;

export type GetPeopleResponseSuccess = {
  count: number;
  next: string;
  previous: null;
  results: SWCharacter[];
};
