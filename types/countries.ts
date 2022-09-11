export type country = {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  cca3: string;
  capital: [string];
  altSpellings: string[];
  region: string;
  subregion: string;
  borders: string[];
  area: number;
  population: number;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  timezones: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
};
