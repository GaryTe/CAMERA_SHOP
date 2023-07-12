import {useState, useEffect} from 'react';
import {AsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import Product from '../../components/product/product';
import Promo from '../../components/promo/promo';
import Sort from '../../components/sort/sort';
import Filter from '../../components/filter/filter';
import AddProduct from '../../components/add-product/add-product';
import MessageAboutAddProduct from '../../components/message-about-add-product/message-about-add-product';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Pagination from '../../components/pagination/pagination';
import { useAppSelector, useAppDispatch } from '../../hooks/use-store/use-store';
import { useLockScroll } from '../../hooks/use-lock-scroll/use-lock-scroll';
import { useRequestToServer } from '../../hooks/use-request-to-server/use-request-to-server';
import { useResetSorting } from '../../hooks/reset-sorting/reset-sorting';
import { dataLoading } from '../../store/selectors/data-product-in-cart/selectors';
import { fetchDataListCamera, fetchDataCardProduct, fetchDataPromoProduct } from '../../store/api-actions/api-actions';
import { camerasData, productsData } from '../../store/selectors/data-cameras/selectors';
import { CardProduct, CamerasList } from '../../types/types-response/types-response';
import { Path, stringValue } from '../../const/const';
import { filterByCategory, filterByPrice, sortDown, sortUp } from '../../util/util';
import { changeDataProducts } from '../../store/reducers/get-list-camera/get-list-camera';

type FetchDataListCamera = AsyncThunk<CamerasList, undefined, {
  extra: AxiosInstance;
}>

type FetchDataSimilarProduct = AsyncThunk<CamerasList, number, {
  extra: AxiosInstance;
}>

type ModalWindow = CardProduct | null;

function Catalog(): JSX.Element {
  const [modalWindow, setModalWindow] = useState<CardProduct | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(9);
  const [indicatorFilter, setIndicatorFilter] = useState({
    category: '',
    typeCamera: '',
    levelProduct: '',
    priceFrom: '',
    priceTo: ''
  });
  const [valueSort, setValueSort] = useState({
    priceOfPopularity: stringValue[0],
    descendingOfAscending: stringValue[2]
  });
  const dispatch = useAppDispatch();
  useRequestToServer<FetchDataListCamera | FetchDataSimilarProduct, null>(fetchDataListCamera);

  const originalProductsList = useAppSelector(productsData);
  const productsList = useAppSelector(camerasData);
  const loading = useAppSelector(dataLoading);

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const productsCurrent = productsList?.slice(firstProductIndex, lastProductIndex);

  useLockScroll<ModalWindow, boolean>(modalWindow, loading);

  useResetSorting(indicatorFilter, setValueSort);

  useEffect(() => {
    let isMounted = true;
    let newDataProduct = originalProductsList;
    const {category, typeCamera, levelProduct, priceFrom, priceTo} = indicatorFilter;
    const {priceOfPopularity, descendingOfAscending} = valueSort;

    if(newDataProduct === null) {return;}

    if(isMounted && (priceFrom || priceTo)) {
      newDataProduct = filterByPrice(newDataProduct, Number(priceFrom), Number(priceTo));
    }

    if(isMounted && category ) {
      newDataProduct = filterByCategory(newDataProduct, category);
    }

    if(isMounted && typeCamera ) {
      newDataProduct = filterByCategory(newDataProduct, typeCamera);
    }
    if(isMounted && levelProduct ) {
      newDataProduct = filterByCategory(newDataProduct, levelProduct);
    }

    if(descendingOfAscending === stringValue[2]) {
      newDataProduct = sortDown(newDataProduct, priceOfPopularity);
    }
    if(descendingOfAscending === stringValue[3]) {
      newDataProduct = sortUp(newDataProduct, priceOfPopularity);
    }

    setCurrentPage(1);
    dispatch(changeDataProducts(newDataProduct));

    return () => {
      isMounted = false;
    };
  },[indicatorFilter, originalProductsList, dispatch, valueSort]);

  return(
    <>
      <Header />
      <main>
        <Promo
          requestDataPromoProduct={fetchDataPromoProduct}
          requestDataCardProduct={fetchDataCardProduct}
        />
        <div className="page-content">
          <div className="breadcrumbs">
            <div className="container">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="#todo">Главная
                    <svg width="5" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"></use>
                    </svg>
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
                </li>
              </ul>
            </div>
          </div>
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <div className="catalog-filter">
                    <Filter
                      onSetIndicatorFilter={setIndicatorFilter}
                      indicatorFilter={indicatorFilter}
                    />
                  </div>
                </div>
                <div className="catalog__content">
                  <div className="catalog-sort">
                    <Sort onSetValueSort={setValueSort} valueSort={valueSort}/>
                  </div>
                  <div className="cards catalog__cards">
                    <Product products={productsCurrent} onSetModalWindow={setModalWindow}/>
                  </div>
                  <Pagination
                    products={productsList}
                    productPerPage={productPerPage}
                    onSetCurrentPage = {setCurrentPage}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        {loading && <MessageAboutAddProduct path={Path.Catalog}/>}
        {modalWindow && <AddProduct dataProduct={modalWindow} onSetModalWindow={setModalWindow} />}
      </main>
      <Footer />
    </>
  );
}

export default Catalog;
