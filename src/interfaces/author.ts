import type Artikel from './artikel';
export default interface Author {
  id: number;
  nachname: string;
  vorname: string;
  linkedinProfile: string | null;
  profilbild: any;
  texts: Array<Artikel>;
}
