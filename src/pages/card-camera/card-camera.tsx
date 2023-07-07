import {useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {AsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import DescriptionCamera from '../../components/description-camera/description-camera';
import SimilaListCamera from '../../components/simila-list-camera/simila-list-camera';
import PegeReviews from '../../components/page-reviews/page-reviews';
import Review from '../../components/review/review';
import MessageDispatchReview from '../../components/message-dispatch-review/message-dispatch-review';
import AddProduct from '../../components/add-product/add-product';
import MessageAboutAddProduct from '../../components/message-about-add-product/message-about-add-product';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ScreenError from '../../components/screen-error/screen-error';
import { useRequestToServer } from '../../hooks/use-request-to-server/use-request-to-server';
import { useLockScroll } from '../../hooks/use-lock-scroll/use-lock-scroll';
import { useAppSelector } from '../../hooks/use-store/use-store';
import { dataLoading } from '../../store/selectors/data-product-in-cart/selectors';
import {dataCameras} from '../../store/selectors/data-cameras/selectors';
import { fetchDataCardProduct } from '../../store/api-actions/api-actions';
import { fetchDataReviews } from '../../store/api-actions/api-actions';
import { dataCameraProduct } from '../../store/selectors/data-card-product/selectors';
import { CardProduct } from '../../types/types-response/types-response';
import { Path } from '../../const/const';

type FetchDataCardProduct = AsyncThunk<CardProduct, number, {
  extra: AxiosInstance;
}>

function CardCamera(): JSX.Element {
  const [modalWindow, setModalWindow] = useState<boolean>(false);
  const [modalWindowMessage, setModalWindowMessage] = useState<boolean>(false);
  const [madalWindowAddProduct, setMadalWindowAddProduct] = useState<boolean | null>(null);
  const loading = useAppSelector(dataLoading);
  const products = useAppSelector(dataCameras);
  const params = useParams();
  const dataProduct = products?.find((product) => product.id.toString() === params.id );

  useRequestToServer<FetchDataCardProduct, number>(fetchDataCardProduct, Number(dataProduct?.id));
  const dataCamera = useAppSelector(dataCameraProduct);

  useLockScroll<boolean, boolean>(modalWindow, modalWindowMessage);
  useLockScroll<boolean | null, boolean>(madalWindowAddProduct, loading);

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return dataProduct?.id ? (
    <>
      <Header />
      <main>
        <div className="page-content">
          <div className="breadcrumbs" >
            <div className="container">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to={Path.Catalog}>Главная
                    <svg width="5" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"></use>
                    </svg>
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to={Path.Catalog}>Каталог
                    <svg width="5" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"></use>
                    </svg>
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <span className="breadcrumbs__link breadcrumbs__link--active">Ретрокамера Das Auge IV</span>
                </li>
              </ul>
            </div>
          </div>
          {dataCamera && <DescriptionCamera camera={dataCamera} onSetMadalWindowAddProduct={setMadalWindowAddProduct}/>}
          {dataProduct.id && <SimilaListCamera cameraId={dataProduct.id.toString()} onSetMadalWindowAddProduct={setMadalWindowAddProduct}/>}
          <div className="page-content__section">
            <section className="review-block">
              <div className="container">
                <div className="page-content__headed">
                  <h2 className="title title--h3">Отзывы</h2>
                  <button className="btn" type="button" onClick={() => setModalWindow(true)}>Оставить свой отзыв</button>
                </div>
                {dataProduct.id && <PegeReviews cameraId={dataProduct.id.toString()} functionRequest={fetchDataReviews} />}
              </div>
            </section>
          </div>
        </div>
        {modalWindow && <Review cameraId={dataProduct.id.toString()} onSetModalWindow={setModalWindow} onSetModalWindowMessage={setModalWindowMessage}/>}
        {modalWindowMessage && <MessageDispatchReview onSetModalWindowMessage={setModalWindowMessage}/>}
        {madalWindowAddProduct && dataCamera && <AddProduct dataProduct={dataCamera} onSetModalWindow={setMadalWindowAddProduct}/>}
        {loading && dataProduct.id && <MessageAboutAddProduct path={`${Path.Catalog}${Path.Product}${dataProduct.id.toString()}`}/>}
      </main>
      <a className="up-btn" href="#todo" onClick={scrollToTop}>
        <svg width="12" height="18" aria-hidden="true">
          <use xlinkHref="#icon-arrow2"></use>
        </svg>
      </a>
      <Footer />
    </>
  ) : (<ScreenError />);
}

export default CardCamera;
