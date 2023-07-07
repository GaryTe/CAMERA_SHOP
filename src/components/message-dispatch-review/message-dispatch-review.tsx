import { useRef } from 'react';
import { useUnlockScroll } from '../../hooks/use-unlock-scroll/use-unlock-scroll';
import { useShiftFocus } from '../../hooks/use-shift-focus/use-shift-focus';
import { shiftFocus } from '../../util/util';

type SetModalWindowMessage = React.Dispatch<React.SetStateAction<boolean>>

type MessageDispatchReviewProps = {
  onSetModalWindowMessage: SetModalWindowMessage;
}

function MessageDispatchReview({onSetModalWindowMessage}: MessageDispatchReviewProps): JSX.Element {
  const refButton = useRef(null);

  useUnlockScroll<SetModalWindowMessage>(onSetModalWindowMessage);
  useShiftFocus(refButton);

  return(
    <div className="modal is-active modal--narrow" onClick={() => {onSetModalWindowMessage(false);}}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" onKeyDown={(evt) => shiftFocus(evt, refButton)}>
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"></use>
          </svg>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={() => onSetModalWindowMessage(false)}
              ref={refButton}
            >
              Вернуться к покупкам
            </button>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={() => onSetModalWindowMessage(false)}
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

export default MessageDispatchReview;
