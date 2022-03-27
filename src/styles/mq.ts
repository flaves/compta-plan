const breakpoints: {
  [key: string]: number;
} = {
  xs: 379,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mq = (value: string) => {
  const bpArray = Object.keys(breakpoints).map(key => [key, breakpoints[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (value === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};

export default mq;
