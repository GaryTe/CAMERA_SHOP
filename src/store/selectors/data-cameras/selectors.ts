import { NameSpace } from '../../../const/const';
import { RootState } from '../../../types/store/store';
import { CamerasList } from '../../../types/types-response/types-response';

export const productsData = (state: RootState): CamerasList | null => state[NameSpace.ListCamera].cameras;
export const camerasData = (state: RootState): CamerasList | null => state[NameSpace.ListCamera].modifiedProductsList;
export const startValue = (state: RootState): CamerasList | null => state[NameSpace.ListCamera].cameras;
