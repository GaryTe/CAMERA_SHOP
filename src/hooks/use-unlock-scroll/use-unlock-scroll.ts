import {useEffect} from 'react';

export const useUnlockScroll = <A>(onCloseModalWindow: A) => {

  useEffect(() => {
    if(typeof onCloseModalWindow !== 'function') {
      throw new Error ('Parameter "onCloseModalWindow" must be a function');
    }

    const closeModalWindow = (evt: KeyboardEvent) => {
      if(evt.key === 'Escape') {
        onCloseModalWindow(false);
      }
    };

    document.addEventListener('keydown', closeModalWindow);

    return () => {
      document.removeEventListener('keydown', closeModalWindow);
    };
  });
};
