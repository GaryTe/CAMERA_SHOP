import { NameSpace } from '../../../const/const';
import { RootState } from '../../../types/store/store';
import { CamerasList } from '../../../types/types-response/types-response';

export const dataProductsInCart = (state: RootState): CamerasList | null => state[NameSpace.AddProduct].productsData;
export const dataLoading = (state: RootState): boolean => state[NameSpace.AddProduct].loading;
