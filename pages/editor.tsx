import { useState, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import dynamic from 'Next/dynamic';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import DialogAddArticle from '@components_p/DialogAddArticle';

import { useEditorStyles } from '@styles_p/editorStyles';

const ValEditorDynamic = dynamic(() => import('@components_p/ValEditor'), {
  loading: () => <p>Loading...</p>,
});

export default function EditorPage() {
  const classes = useEditorStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const editorInstance = useRef<EditorJS>();

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleSave = async () => {
    const savedData = await editorInstance.current.save();
  };

  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar variant="dense">
          <Button variant="outlined" onClick={handleClickOpen}>
            Open form dialog
          </Button>
        </Toolbar>
      </AppBar>
      <DialogAddArticle dialogOpen={dialogOpen} handleClose={handleClose} />
      <ValEditorDynamic
        instanceRef={instance => (editorInstance.current = instance)}
      />
    </>
  );
}
