import { Query, Resolver, Arg, Mutation } from 'type-graphql';
import { dbConnect } from '@db_p/SheetConection';
import {
  Article,
  AddArticleInput,
  Book,
  AddBookInput,
  ArticlesToBooks,
} from '@db_p/entitys/Articles';
import { v4 as uuidv4 } from 'uuid';

@Resolver()
export default class ArticleResolver {
  @Query(returns => Boolean)
  async WipeBook() {
    let dbInstance = await dbConnect();
    await dbInstance.wipeInfo(Article);
    await dbInstance.wipeInfo(Book);
    await dbInstance.wipeInfo(ArticlesToBooks);
    return true;
  }

  @Query(returns => [Article])
  async getArticles() {
    let dbInstance = await dbConnect();
    let ArticlesData = await dbInstance.getInfos(Article);

    ArticlesData.forEach(ArticleData => {
      ArticleData.books = JSON.parse(ArticleData.books);
    });

    return ArticlesData;
  }

  @Query(returns => [Article])
  async getArticle(@Arg('link') articleLink: string) {
    let dbInstance = await dbConnect();

    let whereCond = {
      link: articleLink,
    };

    let ArticlesData = await dbInstance.getInfos(Article, whereCond);

    ArticlesData.forEach(ArticleData => {
      ArticleData.books = JSON.parse(ArticleData.books);
    });

    return ArticlesData;
  }

  @Query(returns => [Book])
  async getBookFromArticle(@Arg('id') articleID: string) {
    let dbInstance = await dbConnect();

    let whereCond = {
      id_article: articleID,
      title: 'hh',
    };

    return await dbInstance.getInfos(Book, whereCond, ArticlesToBooks);
  }

  @Mutation(returns => Article)
  async addArticle(@Arg('data') newArticleData: AddArticleInput) {
    let dbInstance = await dbConnect();
    let newArticle = new Article();

    [
      'title',
      'link',
      'description',
      'image',
      'content',
      'subareas',
      'articles',
    ].forEach(property => {
      newArticle[property] = newArticleData[property];
    });

    newArticle.books = JSON.stringify(newArticleData.books);
    newArticle.id = uuidv4() as string;

    await dbInstance.setInfo(newArticle);

    return newArticleData;
  }

  @Mutation(returns => Book)
  async addBook(
    @Arg('id') id_article: string,
    @Arg('data') newBookData: AddBookInput
  ) {
    let dbInstance = await dbConnect();
    let newBook = new Book();
    let newArticlesToBooks = new ArticlesToBooks();

    ['title', 'link', 'cover'].forEach(property => {
      newBook[property] = newBookData[property];
    });
    newBook.id = uuidv4();

    newArticlesToBooks.id_article = id_article;
    newArticlesToBooks.id_book = newBook.id;

    dbInstance.setInfo(newBook);
    dbInstance.setInfo(newArticlesToBooks);

    return newBook;
  }
}
