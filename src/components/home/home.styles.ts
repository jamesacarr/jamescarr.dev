import { CSSFunc } from '../../types';

export const buttonStyles: CSSFunc = ({ theme }) => ({
  border: `2px solid ${theme.color.neutral900}`,
  borderRadius: '4px',
  fontSize: '1.2rem',
  marginTop: theme.spacing.large,
  padding: `${theme.spacing.small} ${theme.spacing.base}`,
  transition: 'all .3s',

  '&:hover': {
    backgroundColor: theme.color.primary500,
    borderColor: theme.color.primary500,
    cursor: 'pointer',

    svg: {
      transform: 'rotate(90deg)',
    },
  },
});

export const iconStyles: CSSFunc = ({ theme }) => ({
  marginLeft: theme.spacing.small,
  transition: 'transform .3s',
  verticalAlign: 'sub',
});

export const textStyles: CSSFunc = ({ theme }) => ({
  h1: {
    margin: 0,
  },

  span: {
    color: theme.color.yellow500,
  },
});

export const wrapperStyles: CSSFunc = ({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.color.neutral000,
  color: theme.color.neutral900,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
});