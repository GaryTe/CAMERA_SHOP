import {useForm, SubmitHandler} from 'react-hook-form';
import { Fragment, useRef } from 'react';
import { useAppDispatch } from '../../hooks/use-store/use-store';
import { useUnlockScroll } from '../../hooks/use-unlock-scroll/use-unlock-scroll';
import { fetchPostNewReview } from '../../store/api-actions/api-actions';
import { TITLE } from '../../const/const';
import { DataForNewReview } from '../../types/type-request/type-request';
import { useShiftFocus } from '../../hooks/use-shift-focus/use-shift-focus';
import { shiftFocus } from '../../util/util';

type DataFeedback = {
  'rate': string;
  'user-name': string;
  'user-plus': string;
  'user-minus': string;
  'user-comment': string;
}

type SetModalWindow = React.Dispatch<React.SetStateAction<boolean>>

type SetModalWindowMessage = React.Dispatch<React.SetStateAction<boolean>>

type ReviewProps = {
  cameraId: string | undefined;
  onSetModalWindow: SetModalWindow;
  onSetModalWindowMessage: SetModalWindowMessage;
}

function Review({cameraId, onSetModalWindow, onSetModalWindowMessage}: ReviewProps): JSX.Element {
  const {register, handleSubmit, formState: {errors}} = useForm<DataFeedback>();
  const refButton = useRef(null);
  const dispatch = useAppDispatch();

  useUnlockScroll<SetModalWindow>(onSetModalWindow);

  const processingData = async (newDataReview: DataForNewReview) => {
    try {
      await dispatch(fetchPostNewReview(newDataReview)).unwrap();
      onSetModalWindow(false);
      onSetModalWindowMessage(true);
    } catch (error) {
      throw new Error ('Данные не отправлены, для формерования отзова !!!');
    }
  };


  const sendingDataToServer: SubmitHandler<DataFeedback> = (data) => {

    const newDataForReview = {
      cameraId: Number(cameraId),
      userName: data['user-name'],
      advantage: data['user-plus'],
      disadvantage: data['user-minus'],
      review: data['user-comment'],
      rating: Number(data.rate)
    };

    processingData(newDataForReview);
  };

  useShiftFocus(refButton);

  return(
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" onKeyDown={(evt) => shiftFocus(evt, refButton)}>
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form method="post" onSubmit={handleSubmit(sendingDataToServer)}>
              <div className="form-review__rate">
                <fieldset className={!errors.rate ? 'rate form-review__item' : 'rate form-review__item is-invalid'}>
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group" {...register('rate',{required: 'Нужно оценить товар'})}>
                      {TITLE.map((title, index) =>
                      {
                        const id = 5 - index;

                        return(
                          <Fragment key={title}>
                            <input
                              className="visually-hidden"
                              id={`star-${id}`}
                              name="rate"
                              type="radio"
                              value={`${id}`}
                              data-testid="productEvaluation"
                            >
                            </input>
                            <label
                              className="rate__label"
                              htmlFor={`star-${id}`}
                              title={title}
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
                  <p className="rate__message">{errors.rate?.message}</p>
                </fieldset>
                <div
                  className={!errors['user-name'] ? 'custom-input form-review__item' : 'custom-input form-review__item is-invalid'}
                >
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      type="text"
                      {...register('user-name', {required: 'Нужно указать имя'})}
                      placeholder="Введите ваше имя"
                      data-testid="userName"
                    >
                    </input>
                  </label>
                  <p className="custom-input__error">{errors['user-name']?.message}</p>
                </div>
                <div
                  className={!errors['user-plus'] ? 'custom-input form-review__item' : 'custom-input form-review__item is-invalid'}
                >
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      type="text"
                      {...register('user-plus', {required: 'Нужно указать достоинства'})}
                      placeholder="Основные преимущества товара"
                      data-testid="productAdvantages"
                    >
                    </input>
                  </label>
                  <p className="custom-input__error">{errors['user-plus']?.message}</p>
                </div>
                <div
                  className={!errors['user-minus'] ? 'custom-input form-review__item' : 'custom-input form-review__item is-invalid'}
                >
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      type="text"
                      {...register('user-minus', {required: 'Нужно указать недостатки'})}
                      placeholder="Главные недостатки товара"
                      data-testid="productDefects"
                    >
                    </input>
                  </label>
                  <p className="custom-input__error">{errors['user-minus']?.message}</p>
                </div>
                <div
                  className={!errors['user-comment'] ? 'custom-textarea form-review__item' : 'custom-textarea form-review__item is-invalid'}
                >
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea
                      {...register('user-comment',
                        {
                          required: 'Нужно добавить комментарий',
                          minLength: {
                            value: 5,
                            message: 'Минимальная длина равна 5',
                          }
                        })}
                      minLength={5}
                      placeholder="Поделитесь своим опытом покупки"
                      data-testid="productDescription"
                    >
                    </textarea>
                  </label>
                  <div className="custom-textarea__error">{errors['user-comment']?.message}</div>
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
