export interface CapitalI {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  '2018': number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ara: Est;
  bre: Est;
  ces: Est;
  cym: Est;
  deu: Est;
  est: Est;
  fin: Est;
  fra: Est;
  hrv: Est;
  hun: Est;
  ita: Est;
  jpn: Est;
  kor: Est;
  nld: Est;
  per: Est;
  pol: Est;
  por: Est;
  rus: Est;
  slk: Est;
  spa: Est;
  srp: Est;
  swe: Est;
  tur: Est;
  urd: Est;
  zho: Est;
}

interface Languages {
  est: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies {
  EUR: EUR;
}

interface EUR {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  est: Est;
}

interface Est {
  official: string;
  common: string;
}