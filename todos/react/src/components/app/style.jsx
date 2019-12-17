import styled from '@emotion/styled'
import { css } from '@emotion/core'

const global = css`
  body,
  html {
    margin: 0;
  }

  h1,
  h2 {
    margin: 0;
  }
`;

const styledApp = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;


export { global, styledApp }