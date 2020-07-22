import { FCL } from '@utils_p/types';
import { getLayout } from '@components_p/layouts/header';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { useBookStyles } from '@styles_p/article/bookStyles';

interface Book {
  id?: number;
  cover?: string;
  link?: string;
}

interface ArticleBooks {
  books?: Book[];
}

const Books: FCL<ArticleBooks> = ({ books }) => {
  const classes = useBookStyles();
  console.log(books);
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h2" component="h2">
        Books
      </Typography>
      <Grid container className={classes.bookContainer}>
        {books ? (
          books.map((book, i) => (
            <>
              <Grid
                container
                item
                xs={6}
                sm={3}
                key={book.id}
                justify="center"
                className={classes.books}
              >
                <span>
                  <img src={book.cover} />
                </span>
              </Grid>
              {(i + 1) % 4 == 0 ? (
                <Hidden xsDown>
                  <Grid
                    key={book.id + 'self'}
                    item
                    xs={12}
                    className={classes.shelf}
                  />
                </Hidden>
              ) : null}
            </>
          ))
        ) : (
          <Skeleton variant="rect" />
        )}
      </Grid>
    </Container>
  );
};

Books.getLayout = getLayout;

export default Books;
