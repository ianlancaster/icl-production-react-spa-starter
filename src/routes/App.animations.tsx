import { createReactAnimation } from 'services/styleHelpers';

export const logoSpin = {
  animationName: createReactAnimation(`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `),
  animationDuration: '20s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite'
};
