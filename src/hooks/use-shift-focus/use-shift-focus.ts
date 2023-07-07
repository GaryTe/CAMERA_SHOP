import {useEffect, MutableRefObject} from 'react';


export const useShiftFocus = (element: MutableRefObject<null | HTMLElement>) => {
  useEffect(() => {
    let isMounted = true;

    if(isMounted && element.current) {
      element.current.focus();
    }

    return () => {
      isMounted = false;
    };
  },[element]);
};
