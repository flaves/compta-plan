import React, { useEffect } from 'react';

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: Function
) => {
  function handleClickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useOutsideClick;
