import { makeStyles, Theme } from '@material-ui/core/styles';

export const useEditorStyles = makeStyles((theme: Theme) => ({
  navbar: {
    // backgroundColor: '#171B21',
    backgroundColor: 'transparent',
    color: '#000000',
    boxShadow: theme.shadows[0],
    borderBottom: '1px solid #3f4755',
  },
}));
