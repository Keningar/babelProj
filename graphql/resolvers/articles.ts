import {
  Query,
  Resolver,
  Arg,
  ObjectType,
  Int,
  Field,
  Mutation,
  InputType,
} from 'type-graphql';
import { dbConnect } from '@db_p/SheetConection';
import { User as UserIns } from '@db_p/models/User';

@ObjectType()
class Book {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  cover: string;

  @Field(type => String)
  link: string;
}

@ObjectType()
class Article {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  title: string;

  @Field(type => String)
  link: string;

  @Field(type => String)
  img: string;

  @Field(type => String)
  description: string;

  @Field(type => String)
  content: string;

  @Field(type => [Book])
  books: Book[];

  @Field(type => [Article])
  subAreas: Article[];

  @Field(type => [Article])
  articles: Article[];
}

@ObjectType()
class User {
  @Field(type => String)
  username: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  fullname: string;
}

@InputType()
class AddUserInput implements Partial<User> {
  @Field(type => String)
  username: string;

  @Field(type => String)
  email?: string;

  @Field(type => String)
  fullname?: string;
}

@Resolver()
export default class ArticleResolver {
  @Query(returns => [User])
  async getUsers() {
    let dbInstance = await dbConnect();
    return await dbInstance.getInfos(UserIns);
  }

  @Mutation(returns => User)
  async addUser(@Arg('data') newUserData: AddUserInput) {
    let dbInstance = await dbConnect();
    let newUser = new UserIns();
    newUser.username = newUserData.username;
    newUser.email = newUserData.email;
    newUser.fullname = newUserData.fullname;

    return await dbInstance.setInfo(newUser);
  }
}
