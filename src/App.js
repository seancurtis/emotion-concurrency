import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache"; // this is v10

import Emotion10 from "./emo10";

const myCache = createCache({ key: "emotion-cache-10" });

const H1 = styled.div`
  background: green;
  padding: 1em;
  margin: 1em;
`;

async function loadEmotion11() {
  // when this loads later it'll bring in @emotion/react which uses @emotion/cache v11
  // which finds all the v10 style elements and moves them while they are in document head
  return await import("./emo11");
}

function App() {
  const [Emotion11, setComp] = useState("Loading Emotion 11 component");

  // this shows the race condition where style elements owned by @emotion/cache v10 are moved
  // by @emotion/cache v11 when it loads async
  useEffect(
    () =>
      setTimeout(
        () => loadEmotion11().then((mod) => setComp(mod.default)),
        3000
      ),
    []
  );

  return (
    // With or without the CacheProvider you will see @emotion/cache v11 moving style elements it should not move
    <CacheProvider value={myCache}>
      <div style={{ padding: "1em" }}>
        <H1>This is styled-components</H1>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1 0 50%", padding: "1em" }}>
            <Emotion10 />
          </div>
          <div style={{ flex: "1 0 50%", padding: "1em" }}>{Emotion11}</div>
        </div>
        <style>{`* { box-sizing: border-box; `}</style>
      </div>
    </CacheProvider>
  );
}

export default App;
