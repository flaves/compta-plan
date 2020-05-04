import { useCallback, useEffect, useState } from 'react';
import useMeasure, { RectReadOnly } from 'react-use-measure';
import { useInView } from 'react-intersection-observer';

const useParallax = (): [
  (element: HTMLElement | null) => void,
  number,
  RectReadOnly
] => {
  const [viewRef, inView] = useInView();
  const [measureRef, bounds] = useMeasure({ scroll: true });
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const y = Math.abs(bounds?.y);
    const height = bounds?.height;

    if (inView) setValue(Math.round((y / height) * 100));
  }, [bounds]);

  const setRefs = useCallback((node) => {
    measureRef(node);
    viewRef(node);
  }, []);

  return [setRefs, value, bounds];
};

export default useParallax;
