/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const styles = css`
  background: green;
  border-radius: 3px;
  padding: 0.5em;
  margin: 10px;
  color: white;
`;

console.log("styles", styles);

const E11 = () => {
  return (
    <div css={styles}>
      Emotion 11 component
      <Select defaultOptions={options} />
    </div>
  );
};

export default E11;
