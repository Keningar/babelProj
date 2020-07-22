import { useState, useRef, FC } from 'react';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import useAutocomplete from '@material-ui/lab/useAutocomplete';

import { useSearchStyles } from './SearchStyles';

interface Article {
  name: string;
}

interface StyleProps {
  height?: number;
}

export const Search: FC<StyleProps> = ({ height = 19 }) => {
  const [value, setValue] = useState<Article | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Article[]>([
    { name: 'aoption1' },
    { name: 'boption2' },
    { name: 'coption3' },
    { name: 'doption4' },
    { name: 'eoption5' },
    { name: 'foption6' },
    { name: 'goption7' },
    { name: 'hoption8' },
  ]);

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'Babel_Search',
    options: options,
    getOptionLabel: option => option.name,
    includeInputInList: true,
  });

  const classes = useSearchStyles({ height });

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid {...getRootProps()} className={classes.search}>
        <InputBase
          {...getInputProps()}
          placeholder="Search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </Grid>
      {/* SEARCH OPTIONS */}
      {groupedOptions.length > 0 ? (
        <Paper elevation={2} className={classes.options}>
          <ul {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li {...getOptionProps({ option, index })}>{option.name}</li>
            ))}
          </ul>
        </Paper>
      ) : null}
    </Grid>
  );
};
