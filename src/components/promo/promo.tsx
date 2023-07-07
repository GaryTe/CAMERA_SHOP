import {AsyncThunk, ActionCreatorWithoutPayload} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import { useRequestToServer } from '../../hooks/use-request-to-server/use-request-to-server';
import { useAppSelector, useAppDispatch } from '../../hooks/use-store/use-store';
import { promoCamera } from '../../store/selectors/data-promo-camera/selectors';
import { dataCameraProduct } from '../../store/selectors/data-card-product/selectors';
import { PromoProduct, CardProduct } from '../../types/types-response/types-response';
import { Path } from '../../const/const';

type FetchDataPromoProduct = AsyncThunk<PromoProduct, undefined, {
  extra: AxiosInstance;
}>

type FetchDataCardProduct = AsyncThunk<CardProduct, number, {
  extra: AxiosInstance;
}>

type FunctionForTesting = ActionCreatorWithoutPayload<string>

type PromoProps = {
  requestDataPromoProduct: FetchDataPromoProduct | FunctionForTesting;
  requestDataCardProduct: FetchDataCardProduct | FunctionForTesting;
}

function Promo({requestDataCardProduct, requestDataPromoProduct}: PromoProps): JSX.Element {
  const dispatch = useAppDispatch();
  useRequestToServer<FetchDataPromoProduct | FunctionForTesting, null>(requestDataPromoProduct);
  const dataPromo = useAppSelector(promoCamera);

  useEffect(() => {
    let isMounted = true;

    if(isMounted && dataPromo !== null) {
      dispatch(requestDataCardProduct(dataPromo.id));
    } else {
      return;
    }

    return () => {
      isMounted = false;
    };
  }, [dataPromo, dispatch, requestDataCardProduct]);

  const dataCamera = useAppSelector(dataCameraProduct);

  return(
    <div className="banner">
      {dataCamera && dataPromo &&
    <>
      <picture>
        <source type="image/webp" src={dataPromo.previewImgWebp} srcSet={dataPromo.previewImgWebp2x}></source>
        <img src={dataPromo.previewImg} srcSet={dataPromo.previewImg2x} width="1280" height="280" alt="баннер"></img>
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{dataCamera.name}</span>
        <span className="banner__text">{dataCamera.level} {dataCamera.category} от&nbsp;известного производителя</span>
        <Link className="btn" to={`${Path.Catalog}${Path.Product}${dataPromo.id}`}>Подробнее</Link>
      </p>
    </>}
    </div>
  );
}

export default Promo;
