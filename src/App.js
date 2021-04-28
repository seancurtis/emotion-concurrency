import React, { useEffect, useState } from "react";

import styled from "styled-components";

import Emotion10 from "./emo10";

const H1 = styled.div`
  background: green;
  padding: 1em;
  margin: 1em;
`;

async function loadEmotion11() {
  return await import("./emo11");
}

function App() {
  const [Emotion11, setComp] = useState('Loading Emotion 11 component');

  useEffect(
    () =>
      setTimeout(
        () => loadEmotion11().then((mod) => setComp(mod.default)),
        1000
      ),
    []
  );

  console.log(Emotion11);
  return (
    <>
      <div style={{ padding: '1em' }}>
        <H1>This is styled-components</H1>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1 0 50%', padding: '1em' }}>
            <Emotion10 />
          </div>
          <div style={{ flex: '1 0 50%', padding: '1em' }}>
            {Emotion11}
          </div>
        </div>
        <style>{`* { box-sizing: border-box; `}</style>
      </div>
    </>
  );
}

export default App;
