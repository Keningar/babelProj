import create from 'zustand';
import { immer } from '@utils_p/zustand';

interface Bread {
  link: string;
  title: string;
}

interface Book {
  id: number;
  cover: string;
  link: string;
}

interface Article {
  id: number;
  title: string;
  link: string;
  img: string;
  description: string;
  content: string;
  books: Book[];
  subAreas: Article[];
  articles: Article[];
}

interface ArticleStore {
  breadcrumbs: Bread[];
  articleData: Partial<Article>;
  pushBreadcrumbs: (bread: Bread) => void;
  setArticleData: (article: Partial<Article>) => void;
}

const [useArticleStore, apiArticleStore] = create<ArticleStore>(
  immer(set => ({
    breadcrumbs: [{ link: '/', title: 'Home' }],
    pushBreadcrumbs: (bread: Bread) =>
      set((state: ArticleStore) => {
        state.breadcrumbs.push(bread);
      }),
    setArticleData: (article: Partial<Article>) =>
      set((state: ArticleStore) => {
        state.articleData = article;
      }),
  }))
);

export { useArticleStore, apiArticleStore };
