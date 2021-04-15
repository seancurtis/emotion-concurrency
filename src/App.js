import React, { useState } from "react";

import Button from "@atlaskit/button";

import styled from "styled-components";

import Select from "react-select/async";

import Emotion10 from "./emo10";
import Emotion11 from "./emo11";

const Div = styled.div`
  background: #ffdd11;
  min-height: 200px;
`;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Div>
        <Emotion10 />
        <Emotion11 />
        <Select
          isLoading={loading}
          defaultOptions={options}
          components={{ LoadingIndicator: Emotion10 }}
        />
        <Button appearance="primary" onClick={() => setLoading(!loading)}>
          Click me
        </Button>
        test
      </Div>
    </>
  );
}

export default App;
