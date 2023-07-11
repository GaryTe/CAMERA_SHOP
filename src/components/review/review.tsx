import { Fragment, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/use-store/use-store';
import { useUnlockScroll } from '../../hooks/use-unlock-scroll/use-unlock-scroll';
import { fetchPostNewReview } from '../../store/api-actions/api-actions';
import { HEADLINES } from '../../const/const';
import { DataForNewReview } from '../../types/type-request/type-request';
import { useShiftFocus } from '../../hooks/use-shift-focus/use-shift-focus';
import { shiftFocus } from '../../util/util';

type SetModalWindow = React.Dispatch<React.SetStateAction<boolean>>

type SetModalWindowMessage = React.Dispatch<React.SetStateAction<boolean>>

type ReviewProps = {
  cameraId: string | undefined;
  onSetModalWindow: SetModalWindow;
  onSetModalWindowMessage: SetModalWindowMessage;
}

function Review({cameraId, onSetModalWindow, onSetModalWindowMessage}: ReviewProps): JSX.Element {
  const [review, setReview] = useState({
    rate: 0,
    'user-name': 0,
    'user-plus': 0,
    'user-minus': 0,
    'user-comment': 0
  });
  const refUserName = useRef<HTMLInputElement | null>(null);
  const refUserPlus = useRef<HTMLInputElement | null>(null);
  const refUserMinus = useRef<HTMLInputElement | null>(null);
  const refUserComment = useRef<HTMLTextAreaElement | null>(null);
  const refButton = useRef(null);
  const dispatch = useAppDispatch();

  useUnlockScroll<SetModalWindow>(onSetModalWindow);
  useShiftFocus(refButton);

  const processingData = async (newDataReview: DataForNewReview) => {
    try {
      await dispatch(fetchPostNewReview(newDataReview)).unwrap();
      onSetModalWindow(false);
      onSetModalWindowMessage(true);
    } catch (error) {
      throw new Error ('Данные не отправлены, для формерования отзова !!!');
    }
  };


  const sendingDataToServer = () => {
    if(!review.rate || !review['user-name'] || !review['user-plus'] || !review['user-minus'] || !review['user-comment']) {return;}
    if(!refUserName.current || !refUserPlus.current || !refUserMinus.current || !refUserComment.current) {return;}

    const newDataForReview = {
      cameraId: Number(cameraId),
      userName: refUserName.current.value,
      advantage: refUserPlus.current.value,
      disadvantage: refUserMinus.current.value,
      review: refUserComment.current.value,
      rating: Number(review.rate)
    };

    processingData(newDataForReview);
  };

  const checkingData = (data: string, nameKye: string) => {
    if(data.length === 1 || data.length > 0) {setReview({
      ...review,
      [nameKye]: 1
    });}
    if(data.length === 0) {setReview({
      ...review,
      [nameKye]: 0
    });}
  };

  return(
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" onKeyDown={(evt) => shiftFocus(evt, refButton)}>
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form
              method="post"
              onSubmit={(evt) => {
                evt.preventDefault();
                sendingDataToServer();
              }}
            >
              <div className="form-review__rate">
                <fieldset
                  className={
                    review.rate !== 0 ?
                      'rate form-review__item' :
                      'rate form-review__item is-invalid'
                  }
                >
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      {HEADLINES.map((header, index) =>
                      {
                        const id = 5 - index;

                        return(
                          <Fragment key={header}>
                            <input
                              className="visually-hidden"
                              id={`star-${id}`}
                              name="rate"
                              type="radio"
                              value={`${id}`}
                              data-testid="productEvaluation"
                              onChange={() => setReview({
                                ...review,
                                rate: id
                              })}
                            >
                            </input>
                            <label
                              className="rate__label"
                              htmlFor={`star-${id}`}
                              title={header}
                            >
                            </label>
                          </Fragment>
                        );
                      }
                      )}
                    </div>
                    <div className="rate__progress">
                      <span className="rate__stars">0</span>
                      <span>/</span>
                      <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <div
                  className={
                    review['user-name'] !== 0 ?
                      'custom-input form-review__item'
                      :
                      'custom-input form-review__item is-invalid'
                  }
                >
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      type="text"
                      name='user-name'
                      placeholder="Введите ваше имя"
                      data-testid="userName"
                      onChange={(evt) => checkingData(evt.target.value, evt.target.name)}
                      ref={refUserName}
                    >
                    </input>
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div
                  className={
                    review['user-plus'] ?
                      'custom-input form-review__item'
                      :
                      'custom-input form-review__item is-invalid'
                  }
                >
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      type="text"
                      name='user-plus'
                      placeholder="Основные преимущества товара"
                      data-testid="productAdvantages"
                      onChange={(evt) => checkingData(evt.target.value, evt.target.name)}
                      ref={refUserPlus}
                    >
                    </input>
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div
                  className={
                    review['user-minus'] ?
                      'custom-input form-review__item'
                      :
                      'custom-input form-review__item is-invalid'
                  }
                >
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      type="text"
                      name='user-minus'
                      placeholder="Главные недостатки товара"
                      data-testid="productDefects"
                      onChange={(evt) => checkingData(evt.target.value, evt.target.name)}
                      ref={refUserMinus}
                    >
                    </input>
                  </label>
                  <p className="custom-input__error">Нужно указать недостатки</p>
                </div>
                <div
                  className={
                    review['user-comment'] ?
                      'custom-textarea form-review__item'
                      :
                      'custom-textarea form-review__item is-invalid'
                  }
                >
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea
                      name='user-comment'
                      minLength={5}
                      placeholder="Поделитесь своим опытом покупки"
                      data-testid="productDescription"
                      onChange={(evt) => {
                        const {value, name} = evt.target;
                        if(value.length >= 5 && review['user-comment'] === 0) {setReview({...review, [name]: 1});}
                        if(value.length < 5 && review['user-comment'] === 1) {setReview({...review, [name]: 0});}
                      }}
                      ref={refUserComment}
                    >
                    </textarea>
                  </label>
                  <div className="custom-textarea__error">Нужно добавить комментарий</div>
                </div>
              </div>
              <button
                className="btn btn--purple form-review__btn"
                type="submit"
                ref={refButton}
                data-testid="postReview"
              >
                Отправить отзыв
              </button>
            </form>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={() => onSetModalWindow(false)}
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

export default Review;
