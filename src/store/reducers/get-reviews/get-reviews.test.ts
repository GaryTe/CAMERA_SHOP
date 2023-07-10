import { getReviews } from './get-reviews';
import { fetchDataReviews, fetchPostNewReview } from '../../api-actions/api-actions';
import { showMoreReviews } from './get-reviews';
import { review } from '../../../util/mocks';

const firstValueReviews = [review];
const secondValueReviews = [review, review];

const state = {
  reviewsData: [],
  resultSortReviews: null,
  reviews: null,
  counter: 3
};

const changesState = {
  reviewsData: [],
  resultSortReviews: secondValueReviews,
  reviews: null,
  counter: 3
};

describe('Reducer: getReviews', () => {
  it('should update reviewsData, resultSortReviews, reviews when the array is from one review', () => {
    expect(getReviews.reducer(state, {type: fetchDataReviews.fulfilled.type, payload: firstValueReviews}))
      .toEqual({
        reviewsData: firstValueReviews,
        resultSortReviews: firstValueReviews,
        reviews: firstValueReviews,
        counter: 3});
  });
  it('should update reviewsData, resultSortReviews, reviews when the array is from two review', () => {
    expect(getReviews.reducer(state, {type: fetchDataReviews.fulfilled.type, payload: secondValueReviews}))
      .toEqual({
        reviewsData: secondValueReviews,
        resultSortReviews: secondValueReviews,
        reviews: secondValueReviews,
        counter: 3});
  });
  it('should update reviewsData, resultSortReviews, reviews when adding a review', () => {
    expect(getReviews.reducer(state, {type: fetchPostNewReview.fulfilled.type, payload: review}))
      .toEqual({
        reviewsData: firstValueReviews,
        resultSortReviews: firstValueReviews,
        reviews: firstValueReviews,
        counter: 3});
  });
  it('changes value counter, if value resultSortReviews = null, so return and counter = 3', () => {
    expect(getReviews.reducer(state, showMoreReviews()))
      .toEqual({
        reviewsData: [],
        resultSortReviews: null,
        reviews: null,
        counter: 3});
  });
  it('changes value counter, if value resultSortReviews !== null, so counter = 6', () => {
    expect(getReviews.reducer(changesState, showMoreReviews()))
      .toEqual({
        reviewsData: [],
        resultSortReviews: secondValueReviews,
        reviews: secondValueReviews,
        counter: 6});
  });
});
