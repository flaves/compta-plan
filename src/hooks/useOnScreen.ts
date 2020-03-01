import { useCallback, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import { ResizeObserver as polyfill } from '@juggle/resize-observer/lib/ResizeObserver';

const useOnScreen = (
  offset?: number
): [(element: HTMLElement | null) => void, boolean] => {
  const [ref, bounds] = useMeasure({ polyfill, scroll: true });
  const [onScreen, setOnScreen] = useState<boolean>(false);

  const onScroll = useCallback(() => {
    if (bounds?.top <= (offset || 0) && bounds?.top >= -bounds?.height)
      setOnScreen(true);
    else setOnScreen(false);
  }, [bounds?.y]);

  useEffect(() => {
    window.addEventListener(`scroll`, onScroll);

    return () => window.removeEventListener(`scroll`, onScroll);
  });

  return [ref, onScreen];
};

export default useOnScreen;
