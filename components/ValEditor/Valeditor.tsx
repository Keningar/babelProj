import { useEffect, FC } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import { useEditorStyles } from './ValeditorStyles';

export interface EditorJsProps {
  instanceRef?: (instance: EditorJS) => void;
}

export const ValEditor: FC<EditorJsProps> = ({ instanceRef }) => {
  let editorInstance: EditorJS;
  const classes = useEditorStyles();

  useEffect(() => {
    initEditor();
    return () => destroyEditor();
  }, []);

  const initEditor = () => {
    editorInstance = new EditorJS({
      holder: 'editor-js',
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'Let`s write an awesome story!',
            defaultLevel: 1,
          },
        },
        list: List,
      },
      initialBlock: 'header',
    });

    instanceRef?.(editorInstance);
  };

  const destroyEditor = () =>
    new Promise((resolve, reject) => {
      if (!editorInstance) return resolve();
      editorInstance.isReady
        .then(() => {
          if (editorInstance) {
            editorInstance.destroy();
            editorInstance = undefined;
          }
          resolve();
        })
        .catch(reject);
    });

  return <div id="editor-js" className={classes.editor} />;
};
