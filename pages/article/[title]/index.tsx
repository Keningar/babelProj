import { FCL } from '@utils_p/types';
import { getLayout } from '@components_p/layouts/header';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import { useMainArticleStyles } from '@styles_p/article/mainPage';

interface ArticleContent {
  content?: string;
}

const ArticlePages: FCL<ArticleContent> = ({ content }) => {
  const classes = useMainArticleStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography paragraph>{content ? content : <Skeleton />}</Typography>
    </Container>
  );
};

ArticlePages.getLayout = getLayout;

export default ArticlePages;
