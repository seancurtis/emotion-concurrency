/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import Select, { NonceProvider } from "react-select"; // relies on emotion v11 too

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const styles = css`
  background: blue;
  padding: 1em;
  color: white;
`;

console.log("styles", styles);

const E11 = () => {
  return (
    <div css={styles}>
      Emotion 11 component

      {/* We added react-select here to rule it out as the cause, you can comment out the lines to see it makes no difference */}
      <NonceProvider cacheKey="react-select" nonce="testing">
        <Select options={options} />
      </NonceProvider>
    </div>
  );
};

export default E11;
