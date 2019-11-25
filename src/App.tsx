import React from 'react';
import { RenderCanvas } from './containers/Canvas';
import './App.css';
import { Root, Ref } from './containers/Root';

const App: React.FC = () => {
  const ref = React.useRef<Ref>(null);
  return (
    <>
    <Root ref={ref} />
    {/* <RenderCanvas /> */}
    {/* <EG /> */}
    </>
  );
}

export default App;
