import { NameSpace } from '../../../const/const';
import { RootState } from '../../../types/store/store';
import { listCamera } from '../../../types/types-response/types-response';

export const dataProductInCart = (state: RootState): listCamera | null => state[NameSpace.AddProduct].dataProduct;
export const dataLoading = (state: RootState): boolean => state[NameSpace.AddProduct].loading;
