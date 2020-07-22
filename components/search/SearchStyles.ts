import { makeStyles, Theme, fade } from '@material-ui/core/styles';

interface StyleProps {
  height?: number;
}

export const useSearchStyles = makeStyles((theme: Theme) => ({
  root: {
    maxHeight: (props: StyleProps) => `${props.height}px`,
  },
  search: {
    backgroundColor: '#f2f2f2',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
  },
  inputRoot: {
    color: 'inherit',
    height: (props: StyleProps) => `${props.height}px`,
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
    '&::placeholder': {
      color: '#000000',
    },
  },
  options: {
    width: '90%',
    marginTop: '10px',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    '& ul': {
      maxHeight: '200px',
      overflowY: 'scroll',
      listStyleType: 'none',
      textAlign: 'left',
      margin: 0,
      padding: 0,
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    //Option that can use in 'li' https://github.com/mui-org/material-ui/blob/714dc1a85d15a3414e2818ec81ee31820e8aedcf/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L193-L222
    '& li': {
      padding: '10px 0 10px 5px',
      '&[aria-selected="true"]': {
        backgroundColor: 'coral',
      },
      '&[data-focus="true"]': {
        backgroundColor: 'coral',
      },
      '&:active': {
        backgroundColor: 'coral',
      },
      '&[aria-disabled="true"]': {
        opacity: theme.palette.action.disabledOpacity,
        pointerEvents: 'none',
      },
    },
  },
}));
