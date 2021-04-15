/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const styles = css`
  background: green;
  border-radius: 3px;
  padding: 0.5em;
  margin: 10px;
`;

console.log('styles',styles);

const E11 = () => (
  <div
    css={styles}
  >
    Emotion 11 component
  </div>
);

export default E11;
