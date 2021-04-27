import React, { useEffect, useState } from "react";

import styled from "styled-components";

import Emotion10 from "./emo10";

const Div = styled.div`
  background: #ffdd11;
  min-height: 200px;
`;

async function loadEmotion11() {
  return await import("./emo11");
}

function App() {
  const [Emotion11, setComp] = useState('p');

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
      <Div>
        <Emotion10 />
        {Emotion11}
        test
      </Div>
    </>
  );
}

export default App;
