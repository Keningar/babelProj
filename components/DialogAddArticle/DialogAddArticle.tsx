import { useState, useRef, ChangeEvent, FC } from 'react';

import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useAddArticleStyles } from './AddArticleStyles';

interface DialogAddArticleProps {
  dialogOpen: boolean;
  handleClose: () => void;
}

export const DialogAddArticle: FC<DialogAddArticleProps> = ({
  dialogOpen,
  handleClose,
}) => {
  const classes = useAddArticleStyles();
  const [dialogInputValue, setDialogInputValue] = useState<string>();

  const HandleDialogInputValue = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDialogInputValue(e.target.value);
  };

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogTitle id="form-dialog-title">New Article</DialogTitle>
      <DialogContent>
        <InputBase
          classes={{
            root: classes.dialogTextRoot,
            input: classes.dialogTextInput,
          }}
          placeholder="Article Name"
          value={dialogInputValue}
          onChange={HandleDialogInputValue}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};
