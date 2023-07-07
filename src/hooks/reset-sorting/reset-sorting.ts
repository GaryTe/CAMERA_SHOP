import {useEffect} from 'react';
import { stringValue } from '../../const/const';

type IndicatorFilter = {
  category: string;
  typeCamera: string;
  levelProduct: string;
  priceFrom: string;
  priceTo: string;
}

type SetValueSort = React.Dispatch<React.SetStateAction<{
  priceOfPopularity: string;
  descendingOfAscending: string;
}>>


export const useResetSorting = (
  indicatorFilter: IndicatorFilter,
  onSetValueSort: SetValueSort
) => {
  useEffect(() => {
    let isMounted = true;

    if(isMounted) {
      onSetValueSort({
        priceOfPopularity: stringValue[0],
        descendingOfAscending: stringValue[2]
      });
    }

    return () => {
      isMounted = false;
    };
  },[indicatorFilter, onSetValueSort]);
};
