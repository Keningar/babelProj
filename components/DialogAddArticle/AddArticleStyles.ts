import { makeStyles, Theme } from '@material-ui/core/styles';

export const useAddArticleStyles = makeStyles((theme: Theme) => ({
  dialogPaper: {
    backgroundColor: '#171b21',
    border: '1px solid #3f4755',
  },
  dialogTextRoot: {
    width: '512px',
    backgroundColor: '#111418',
    border: '1px solid #3f4755',
    borderRadius: '3px',
  },
  dialogTextInput: {
    padding: '6px 15px',
  },
}));
