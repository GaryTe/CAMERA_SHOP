import { NameSpace } from '../../../const/const';
import { RootState } from '../../../types/store/store';
import { listCamera } from '../../../types/types-response/types-response';

export const dataSimilaCameras = (state: RootState): listCamera | null => state[NameSpace.SimilarProduct].sortListCamerra;
export const receivedData = (state: RootState): listCamera | null => state[NameSpace.SimilarProduct].dataSimilaCameras;
export const dataConter = (state: RootState): number => state[NameSpace.SimilarProduct].counterMax;
