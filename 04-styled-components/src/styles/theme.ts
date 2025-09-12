export const breakpoints = {
  bp2: 481,
  bp3: 769,
  bp4: 1025,
};

export const media = {
  bp2: `@media (min-width: ${breakpoints.bp2}px)`,
  bp3: `@media (min-width: ${breakpoints.bp3}px)`,
  bp4: `@media (min-width: ${breakpoints.bp4}px)`,
};

export interface AppTheme {
  name: 'light' | 'dark';
  colors: {
    bg: string;
    fg: string;
    muted: string;
    surface: string;
    border: string;
    accent: string;
    accentFg: string;
    tagNovo: string;
    tagPromo: string;
    focus: string;
  };
  shadow: {
    card: string;
  };
  radius: {
    xs: string;
    sm: string;
    md: string;
  };
  space: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
  };
  media: typeof media;
  transitionFast: string;
  transitionBase: string;
}

const common: Omit<AppTheme, 'name' | 'colors' | 'shadow'> = {
  radius: {
    xs: '6px',
    sm: '10px',
    md: '14px',
  },
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
  },
  media,
  transitionFast: '150ms',
  transitionBase: '200ms',
};

export const lightTheme: AppTheme = {
  name: 'light',
  colors: {
    bg: '#ffffff',
    fg: '#111111',
    muted: '#6b7280',
    surface: '#f8fafc',
    border: '#e5e7eb',
    accent: '#2563eb',
    accentFg: '#ffffff',
    tagNovo: '#065f46',
    tagPromo: '#7c2d12',
    focus: '#f59e0b',
  },
  shadow: {
    card: '0 1px 2px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.1)',
  },
  ...common,
};

export const darkTheme: AppTheme = {
  name: 'dark',
  colors: {
    bg: '#0b0b0c',
    fg: '#f3f4f6',
    muted: '#9ca3af',
    surface: '#151619',
    border: '#26272b',
    accent: '#3b82f6',
    accentFg: '#0b0b0c',
    tagNovo: '#34d399',
    tagPromo: '#fbbf24',
    focus: '#facc15',
  },
  shadow: {
    card: '0 1px 2px rgba(0,0,0,.6), 0 1px 3px rgba(0,0,0,.65)',
  },
  ...common,
};
