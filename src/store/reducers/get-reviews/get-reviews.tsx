import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDataReviews, fetchPostNewReview } from '../../api-actions/api-actions';
import { sortReviews } from '../../../util/util';
import { ReviewsCamera } from '../../../types/store/store';
import { NameSpace } from '../../../const/const';
import { review, Review } from '../../../util/mocks';

const initialState: ReviewsCamera = {
  reviewsData: [],
  resultSortReviews: null,
  reviews: null,
  counter: 3
};

export const getReviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    showMoreReviews: (state) => {
      if(state.resultSortReviews === null) {return;}
      state.counter += 3;
      state.reviews = state.resultSortReviews.slice(0, state.counter);
    },
    functionForTesting: (state, action: PayloadAction<Array<Review> | number>) => {
      state.reviewsData = typeof action?.payload === 'number' ? [review, review, review, review] : action.payload;
      state.reviews = [review, review, review];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDataReviews.fulfilled, (state, action) => {
        state.reviewsData = action.payload;
        state.resultSortReviews = sortReviews(state.reviewsData);
        state.reviews = state.resultSortReviews.slice(0,state.counter);
      });
    builder
      .addCase(fetchPostNewReview.fulfilled, (state, action) => {
        state.reviewsData.push(action.payload);
        state.resultSortReviews = sortReviews(state.reviewsData);
        state.reviews = state.resultSortReviews.slice(0,state.counter);
      });
  }
});

export const {showMoreReviews, functionForTesting} = getReviews.actions;
