import {Link} from 'react-router-dom';
import {useEffect, useRef} from 'react';
import { useAppDispatch } from '../../hooks/use-store/use-store';
import { closeModalWindow } from '../../store/reducers/get-product-in-cart/get-product-in-cart';
import { Path } from '../../const/const';
import { useShiftFocus } from '../../hooks/use-shift-focus/use-shift-focus';
import { shiftFocus } from '../../util/util';

type MessageAboutAddProductProps = {
  path: string;
}

function MessageAboutAddProduct({path}: MessageAboutAddProductProps): JSX.Element {
  const refButton = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {

    const closePopapWindow = (evt: KeyboardEvent) => {
      if(evt.key === 'Escape') {
        dispatch(closeModalWindow());
      }
    };

    document.addEventListener('keydown', closePopapWindow);

    return () => {
      document.removeEventListener('keydown', closePopapWindow);
    };
  });

  useShiftFocus(refButton);

  return(
    <div className="modal is-active modal--narrow" onClick={() => {dispatch(closeModalWindow());}}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" onKeyDown={(evt) => shiftFocus(evt, refButton)}>
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon" width="86" height="80" aria-hidden="true">
            <use xlinkHref="#icon-success"></use>
          </svg>
          <div className="modal__buttons">
            <button
              className="btn btn--transparent modal__btn"
              onClick={() => dispatch(closeModalWindow())}
              ref={refButton}
            >
              <Link to={path}>Продолжить покупки</Link>
            </button>
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              onClick={() => dispatch(closeModalWindow())}
            >
              <Link to={`${Path.Catalog}${Path.Basket}`}>Перейти в корзину</Link>
            </button>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={() => dispatch(closeModalWindow())}
          >
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageAboutAddProduct;
