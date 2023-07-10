import { NameSpace } from '../../../const/const';
import { RootState } from '../../../types/store/store';
import { CamerasList } from '../../../types/types-response/types-response';

export const similaCamerasData = (state: RootState): CamerasList | null => state[NameSpace.SimilarProduct].sortCamerasList;
export const receivedCamerasList = (state: RootState): CamerasList | null => state[NameSpace.SimilarProduct].similaCamerasData;
export const dataConter = (state: RootState): number => state[NameSpace.SimilarProduct].counterMax;
