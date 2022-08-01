import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
//import { Editor } from '../components/Editor';
const Editor = dynamic(() => import('../components/Editor'), {
  ssr: false,
});

const Next: NextPage = () => {
  return (
    <div>
      <Editor />
    </div>
  );
};

export default Next;
