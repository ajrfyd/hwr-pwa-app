export const colorMapper = {
  primary: 'is-primary',
  dark: 'is-dark',
  success: 'is-success',
  warn: 'is-warning',
  error: 'is-error'
} as const;

export type ColorKeys = keyof typeof colorMapper;
