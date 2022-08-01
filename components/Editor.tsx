import React, { useRef, useEffect } from 'react';
//import * as monaco from 'monaco-editor';

async function loadCustomHook() {
  const monaco = await import('monaco-editor');
  return monaco;
}

// @ts-ignore
self.MonacoEnvironment = {
  getWorkerUrl: function (_moduleId: any, label: string) {
    if (label === 'json') {
      return '_next/static/json.worker.bundle.js';
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return '_next/static/css.worker.bundle.js';
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return '_next/static/html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return '_next/static/ts.worker.bundle.js';
    }
    return '_next/static/editor.worker.bundle.js';
  },
};

export default function Editor(): React.ReactElement {
  const divEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let editor: any;
    //@ts-ignore
    loadCustomHook().then((monaco) => {
      if (divEl.current) {
        editor = monaco.editor.create(divEl.current, {
          value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
          language: 'typescript',
        });
      }
    });
    return () => {
      editor.dispose();
    };
  }, []);
  return <div style={{ height: '600px', width: '600px' }} className="Editor" ref={divEl}></div>;
}
