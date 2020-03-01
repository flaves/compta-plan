import { useCallback, useEffect, useState } from 'react';
import useMeasure, { RectReadOnly } from 'react-use-measure';
import { ResizeObserver as polyfill } from '@juggle/resize-observer/lib/ResizeObserver';

const useParallax = (): [
  (element: HTMLElement | null) => void,
  number,
  RectReadOnly
] => {
  const [ref, bounds] = useMeasure({ polyfill, scroll: true });
  const [value, setValue] = useState<number>(0);

  const onScroll = useCallback(() => {
    setValue(Math.round((Math.abs(bounds?.y) / bounds?.height) * 100));
  }, [bounds?.y]);

  useEffect(() => {
    window.addEventListener(`scroll`, onScroll);

    return () => window.removeEventListener(`scroll`, onScroll);
  });

  return [ref, value, bounds];
};

export default useParallax;
