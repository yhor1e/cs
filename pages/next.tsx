import type { NextPage } from 'next';
import Editor, { Monaco } from '@monaco-editor/react';

//@ts-ignore
function handleEditorMount(editor) {
  console.log(editor);
  editor.onDidBlurEditorText(() => console.log('on blur event', editor.getValue()));
}

const Next: NextPage = () => {
  return (
    <div>
      <Editor
        height="30vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorMount}
      />
      <Editor
        height="30vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorMount}
      />
    </div>
  );
};

export default Next;
