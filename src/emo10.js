/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import css from "@emotion/css";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

const theme = {
  color: "white",
};

const Headline = styled.h1`
  color: ${props => props.theme.color};
  font-family: sans-serif;
`

const E10 = () => (
  <ThemeProvider theme={theme}>
    <div
      css={css`
        background: red;
        padding: 1em;
      `}
    >
      <Headline>Heyyy</Headline>
      <p css={(theme) => ({ color: theme.color })}>Emotion 10 component</p>
      <p css={(theme) => ({ color: theme.color })}>This component should be red, notice how all the styles are removed once the Emotion 11 component is loaded in.</p>
    </div>
  </ThemeProvider>
);

export default E10;
