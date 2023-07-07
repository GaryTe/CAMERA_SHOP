import {useEffect} from 'react';

export const useLockScroll = <A,B>(modalWindow?: A, modalWindowMessage?: B) => {

  useEffect(() => {
    let isMounted = true;

    if(isMounted && (modalWindow || modalWindowMessage)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      isMounted = false;
    };
  },[modalWindow, modalWindowMessage]);
};
