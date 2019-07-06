/** @jsx jsx */
import { jsx } from '@emotion/core';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import { FC } from 'react';

import Icon from '../icon';
import { copyrightStyles, footerStyles } from './footer.styles';

const Footer: FC = () => (
  <footer css={footerStyles}>
    <div>
      <Icon href="https://www.linkedin.com/in/james-a-carr/" label="LinkedIn">
        <LinkedinIcon size="1.5rem" />
      </Icon>
      <Icon href="https://github.com/jamesacarr" label="GitHub">
        <GithubCircleIcon size="1.5rem" />
      </Icon>
    </div>

    <span css={copyrightStyles}>
      James Carr <span>&copy; 2019</span>
    </span>
  </footer>
);

export default Footer;