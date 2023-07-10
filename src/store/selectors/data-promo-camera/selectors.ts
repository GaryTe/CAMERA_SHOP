import { NameSpace } from '../../../const/const';
import { RootState } from '../../../types/store/store';
import { PromoProduct } from '../../../types/types-response/types-response';

export const promoCamera = (state: RootState): PromoProduct | null => state[NameSpace.Promo].promoCamerasData;
