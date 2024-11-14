import type Author from './author';
export default interface Artikel {
  id: number;
  title: string;
  these: string;
  textbody: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  authors: Array<Author>;
}
