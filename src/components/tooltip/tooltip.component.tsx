/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';

import { tooltipStyles, tooltipContainerStyles } from './tooltip.styles';

interface Props {
  message: string;
  visible: boolean;
}

export const Tooltip: FC<Props> = ({ children, message, visible }) => (
  <div css={tooltipContainerStyles}>
    {children}
    {visible && (
      <div className="tooltip" css={tooltipStyles}>
        {message}
      </div>
    )}
  </div>
);

export default Tooltip;