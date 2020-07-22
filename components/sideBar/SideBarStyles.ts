import { makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

//Styles
export const useSideBarStyles = makeStyles((theme: Theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
      overflowX: 'hidden',
    },
  },
  toolbar: theme.mixins.toolbar,
}));
