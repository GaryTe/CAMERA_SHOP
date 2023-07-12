import {AsyncThunk, ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import Star from '../star/star';
import { useRequestToServer } from '../../hooks/use-request-to-server/use-request-to-server';
import { useAppSelector, useAppDispatch } from '../../hooks/use-store/use-store';
import { showMoreReviews } from '../../store/reducers/get-reviews/get-reviews';
import { reviewsData, valueCounter, feedbackReviews } from '../../store/selectors/data-reviews/selectors';
import { Reviews } from '../../types/types-response/types-response';
import { getTranslateDate } from '../../util/util';
import { Review } from '../../util/mocks';

type FetchDataReviews = AsyncThunk<Reviews, number, {
  extra: AxiosInstance;
}>

type FunctionForTesting = ActionCreatorWithPayload<number | Review[], string>

type PegeReviewsProps = {
  cameraId: string;
  functionRequest: FetchDataReviews | FunctionForTesting;
}

function PegeReviews({cameraId, functionRequest}: PegeReviewsProps): JSX.Element {
  useRequestToServer<FetchDataReviews | FunctionForTesting, number>(functionRequest, Number(cameraId));
  const dispatch = useAppDispatch();
  const valueReviews = useAppSelector(feedbackReviews);
  const reviews = useAppSelector(reviewsData);
  const counter = useAppSelector(valueCounter);

  return(
    <>
      <ul className="review-block__list">
        {reviews && reviews.map((dataReview) => {
          const {id, createAt, userName, advantage, disadvantage, review, rating} = dataReview;

          return(
            <li key={id} className="review-card">
              <div className="review-card__head">
                <p className="title title--h4">{userName}</p>
                <time className="review-card__data" dateTime="2022-04-13">{getTranslateDate(createAt)}</time>
              </div>
              <div className="rate review-card__rate">
                <Star result={rating} />
                <p className="visually-hidden">Оценка: {rating}</p>
              </div>
              <ul className="review-card__list">
                <li className="item-list"><span className="item-list__title">Достоинства:</span>
                  <p className="item-list__text">{advantage}</p>
                </li>
                <li className="item-list"><span className="item-list__title">Недостатки:</span>
                  <p className="item-list__text">{disadvantage}</p>
                </li>
                <li className="item-list"><span className="item-list__title">Комментарий:</span>
                  <p className="item-list__text">{review}</p>
                </li>
              </ul>
            </li>
          );
        }
        )}
      </ul>
      <div className="review-block__buttons">
        {
          valueReviews !== null && counter <= valueReviews.length &&
        <button
          className="btn btn--purple"
          type="button"
          onClick={() => dispatch(showMoreReviews())}
        >
      Показать больше отзывов
        </button>
        }
      </div>
    </>
  );
}

export default PegeReviews;
