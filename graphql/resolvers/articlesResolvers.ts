import { Query, Resolver, Arg, Mutation } from 'type-graphql';
import { dbConnect } from '@db_p/SheetConection';
import { Article, AddArticleInput } from '@db_p/entitys/Articles';
import { v4 as uuidv4 } from 'uuid';

@Resolver()
export default class ArticleResolver {
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
}
