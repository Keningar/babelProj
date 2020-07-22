import { makeStyles, Theme } from '@material-ui/core/styles';

export const useBookStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(3),
  },
  bookContainer: {
    padding: theme.spacing(3, 0),
    '& > div': {
      position: 'relative',
    },
  },
  books: {
    marginTop: theme.spacing(3),
    '& span': {
      display: 'flex',
      justifyContent: 'center',
      '& img': {
        position: 'relative',
        bottom: 0,
        width: '65%',
        objectFit: 'cover',
        transition: theme.transitions.create('bottom'),
        '&:hover': {
          bottom: 10,
        },
      },
      [theme.breakpoints.up('sm')]: {
        '&::after': {
          content: '""',
          display: 'block',
          width: '60%',
          height: '1em',
          background: 'rgba(253,253,253,.35)',
          borderRadius: '50%',
          position: 'absolute',
          bottom: '-10px',
          WebkitFilter: 'blur(5px)',
          filter: 'blur(5px)',
          zIndex: '-5',
        },
      },
    },
  },
  shelf: {
    borderBottom: `30px solid ${theme.custom.shelf.secondary}`,
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    top: '-15px',
    zIndex: -10,
    '&::after': {
      content: '""',
      background: theme.custom.shelf.primary,
      height: '20px',
      width: 'calc(100% + 40px)',
      position: 'absolute',
      top: '30px',
      left: 0,
      right: 0,
      zIndex: 1,
      margin: '0 -20px',
    },
  },
}));
