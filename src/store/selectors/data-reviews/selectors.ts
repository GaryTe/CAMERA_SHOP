import { NameSpace } from '../../../const/const';
import { RootState } from '../../../types/store/store';
import { Reviews } from '../../../types/types-response/types-response';

export const feedbackReviews = (state: RootState): Reviews | null => state[NameSpace.Reviews].reviewsData;
export const reviewsData = (state: RootState): Reviews | null => state[NameSpace.Reviews].reviews;
export const valueCounter = (state: RootState): number => state[NameSpace.Reviews].counter;
