import type Author from './author';
export default interface Artikel {
  id: number;
  attributes: {
    Title: string;
    These_Frage: string;
    IsThese: boolean;
    isFrage: boolean;
    Text: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Author: { data: Array<Author> };
  };
}
