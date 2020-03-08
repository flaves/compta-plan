import { css } from '@emotion/core';
import { fonts } from '../fonts/fonts';
import mq from './mq';

const reset = css`
  ${fonts}

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  button,
  ul,
  li,
  address,
  a {
    font-family: Galano, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }

  a {
    color: black;
    text-decoration: none;
  }

  // body {
  //   border: 5px solid pink;
  //
  //   ${mq(`sm`)} {
  //     border-color: orange;
  //   }
  //
  //   ${mq(`md`)} {
  //     border-color: red;
  //   }
  //
  //   ${mq(`lg`)} {
  //     border-color: green;
  //   }
  //
  //   ${mq(`xl`)} {
  //     border-color: blue;
  //   }
  // }
`;

export default reset;
