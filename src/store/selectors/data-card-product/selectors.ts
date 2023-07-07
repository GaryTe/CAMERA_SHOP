import { NameSpace } from '../../../const/const';
import { RootState } from '../../../types/store/store';
import { CardProduct } from '../../../types/types-response/types-response';

export const dataCameraProduct = (state: RootState): CardProduct | null => state[NameSpace.CardProduct].dataCamera;
