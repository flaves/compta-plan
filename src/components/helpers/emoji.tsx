import React from 'react';
import { css } from '@emotion/core';

interface EmojiProps {
  label: string;
  symbol: any;
}

const Emoji: React.FC<EmojiProps> = ({ label, symbol }) => (
  <span
    role="img"
    aria-label={label}
    aria-hidden={!label}
    css={css`
      display: inline-block;
      margin-right: 5px;
    `}
  >
    {symbol}
  </span>
);

export default Emoji;
