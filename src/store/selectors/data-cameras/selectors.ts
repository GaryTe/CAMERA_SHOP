import { NameSpace } from '../../../const/const';
import { RootState } from '../../../types/store/store';
import { listCamera } from '../../../types/types-response/types-response';

export const dataProduct = (state: RootState): listCamera | null => state[NameSpace.ListCamera].cameras;
export const dataCameras = (state: RootState): listCamera | null => state[NameSpace.ListCamera].modifiedListProduct;
export const startValue = (state: RootState): listCamera | null => state[NameSpace.ListCamera].cameras;
