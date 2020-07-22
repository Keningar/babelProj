import { makeStyles, Theme } from '@material-ui/core/styles';

export const useArticleStyles = makeStyles((theme: Theme) => ({
  navbar: {
    backgroundColor: 'transparent',
    color: '#000000',
    boxShadow: theme.shadows[0],
  },
  breadcrumbsNav: {
    flexGrow: 1,
  },
  breadcrumbsLink: {
    '&::hover': {
      textDecoration: 'none',
    },
  },
  containerRoot: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  headerContent: {
    textAlign: 'center',
    '& > *': {
      padding: theme.spacing(1, 0),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 5),
      },
    },
    '& p': {
      width: '100%',
    },
  },
  //TODO: Repair Broken img text on 450px sceen size
  headerImg: {
    '& img': {
      fontFamily: 'Helvetica',
      fontWeight: 300,
      lineHeight: 2,
      textAlign: 'center',
      width: '100%',
      height: 'auto',
      display: 'block',
      position: 'relative',
      objectFit: 'cover',
      borderRadius: '25px',
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '-10px',
        left: 0,
        height: 'calc(100% + 10px)',
        width: '100%',
        backgroundColor: theme.palette.background.default,
      },
      '&:after': {
        content: '"Broken Image of " attr(alt)',
        display: 'block',
        position: 'absolute',
        top: '-5px',
        left: 0,
        zIndex: 2,
        width: '100%',
        textAlign: 'center',
      },
    },
    // Skeleton
    '& span': {
      paddingBottom: '120%',
    },
  },
  tabs: {
    '& button': {
      [theme.breakpoints.down('xs')]: {
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: 'none',
      },
    },
  },
}));
