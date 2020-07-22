import { ChangeEvent, FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

//Components
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MLink from '@material-ui/core/Link';
import Skeleton from '@material-ui/lab/Skeleton';

//Custom Components
import Search from '@components_p/search';

//Custom Hooks
import { useArticleStyles } from './headerStyles';
import { useArticleStore } from '@stores_p/ArticleStore';
import { useGetArticlesQuery } from '@graphql_p/querys/viewer.graphql';

//Interfaces & Types
import { GetLayout } from '@utils_p/types';

interface HeaderProps {
  children: (props: {}) => ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  const router = useRouter();
  const { title } = router.query;
  const section = router.pathname.match(/\/\w+$/)?.[0];

  const classes = useArticleStyles();
  const breadcrumbs = useArticleStore(store => store.breadcrumbs);
  const { data } = useGetArticlesQuery({
    variables: {
      link: title as string,
    },
  });

  let ChildProps: any;
  switch (section) {
    case '/books':
      ChildProps = { books: data?.getArticles.books };
      break;
    case '/subareas':
      ChildProps = { subAreas: data?.getArticles.subAreas };
      break;
    case '/articles':
      ChildProps = { articles: data?.getArticles.articles };
      break;
    default:
      ChildProps = { content: data?.getArticles.content };
      break;
  }

  console.log(section);

  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    const href = `/article/[title]${newValue}`;
    const as = `/article/${title}${newValue}`;
    router.push(href, as, { shallow: true });
  };

  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar variant="dense">
          <Breadcrumbs
            aria-label="breadcrumb"
            className={classes.breadcrumbsNav}
          >
            {breadcrumbs.map(bread => (
              <Link key={bread.title} href={bread.link}>
                <MLink color="inherit" className={classes.breadcrumbsLink}>
                  {bread.title}
                </MLink>
              </Link>
            ))}
          </Breadcrumbs>
          <div
            style={{
              position: 'relative',
            }}
          >
            <Search height={35} />
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" classes={{ root: classes.containerRoot }}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={4} sm={3} className={classes.headerImg}>
            {data ? (
              <img src="/img/cover3.jpg" alt="cover" />
            ) : (
              <Skeleton variant="rect" />
            )}
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={9}
            justify="center"
            className={classes.headerContent}
          >
            <Typography variant="h3" component="h3">
              {data ? data.getArticles.title : <Skeleton width={'5ch'} />}
            </Typography>
            <Typography variant="body2" component="p">
              {data ? (
                data.getArticles.description
              ) : (
                <Skeleton width={'100%'} />
              )}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Tabs
        value={section ?? ''}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label="Content" value="" />
        <Tab label="Books" value="/books" />
        <Tab label="SubAreas" value="/subareas" />
        <Tab label="Articles" value="/articles" />
      </Tabs>
      {children({ ...ChildProps })}
    </>
  );
};

export const getLayout: GetLayout = (Component, props) => (
  <Header>
    {(LayoutProps: any) => <Component {...props} {...LayoutProps} />}
  </Header>
);
