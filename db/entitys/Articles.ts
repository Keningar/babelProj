import { AbstractModel, worksheet, column } from '@db_p/google-spreadsheet-orm';
import { ObjectType, Field, InputType, ID } from 'type-graphql';

@ObjectType()
@worksheet(0)
export class Article extends AbstractModel {
  @Field(type => ID)
  @column
  id: string;

  @Field(type => String)
  @column
  title: string;

  @Field(type => String)
  @column
  link: string;

  @Field(type => String)
  @column
  description: string;

  @Field(type => String, { nullable: true })
  @column
  image?: string;

  @Field(type => String, { nullable: true })
  @column
  content?: string;

  @Field(type => [Book], { nullable: 'items' }) // [Book]!
  @column
  books?: string;

  @Field(type => String, { nullable: true })
  @column
  subareas?: string;

  @Field(type => String, { nullable: true })
  @column
  articles?: string;
}

@InputType()
export class AddArticleInput {
  @Field(type => String)
  title: string;

  @Field(type => String)
  link: string;

  @Field(type => String)
  description: string;

  @Field(type => String, { nullable: true })
  image?: string;

  @Field(type => String, { nullable: true })
  content?: string;

  @Field(type => [AddBookInput]) // [AddBook!]
  books?: AddBookInput[] = [];

  @Field(type => String, { nullable: true })
  subareas?: string;

  @Field(type => String, { nullable: true })
  articles?: string;
}

@ObjectType()
@worksheet(18597815)
export class Book extends AbstractModel {
  @Field(type => ID)
  @column
  id: string;

  @Field(type => String)
  @column
  title: string;

  @Field(type => String)
  @column
  link: string;

  @Field(type => String, { nullable: true })
  @column
  cover?: string;
}

@InputType()
export class AddBookInput implements Partial<Book> {
  @Field(type => String)
  title: string;

  @Field(type => String)
  link: string;

  @Field(type => String, { nullable: true })
  cover?: string;
}

@ObjectType()
@worksheet(1249953609)
export class ArticlesToBooks extends AbstractModel {
  @Field(type => ID)
  @column
  id_article: string;

  @Field(type => ID)
  @column
  id_book: string;
}
