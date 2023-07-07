import {useState} from 'react';
import CardsProduct from '../cards-product/cards-product';
import { showMoreCards, showFewerCards } from '../../store/reducers/get-simila-product/get-simila-product';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store/use-store';
import { fetchDataSimilarProduct } from '../../store/api-actions/api-actions';
import {
  dataSimilaCameras,
  receivedData,
  dataConter
} from '../../store/selectors/data-simila-cameras/selectors';

type SetMadalWindowAddProduct = React.Dispatch<React.SetStateAction<boolean | null>>

type SimilaListCameraProps = {
  cameraId: string;
  onSetMadalWindowAddProduct: SetMadalWindowAddProduct;
}

const OFFSET = 555;

function SimilaListCamera({cameraId, onSetMadalWindowAddProduct}: SimilaListCameraProps): JSX.Element {
  const [offset, setOffset] = useState(0);
  const dispatch = useAppDispatch();
  const dataCameras = useAppSelector(receivedData);
  const valueCaunter = useAppSelector(dataConter);

  const handlerOffsetLeft = () => {
    setOffset((value) => value + OFFSET);
  };

  const handlerOffsetRight = () => {
    setOffset((value) => value - OFFSET);
  };

  return(
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div
            className="product-similar__slider"
            style={{
              overflow: 'hidden',
              maxWidth: '560px'
            }}
          >
            <div
              className="product-similar__slider-list"
              style={{
                transform: `translateX(${offset}px)`,
                transition: 'translate',
                transitionProperty: 'transform',
                transitionDuration: '400ms',
                transitionTimingFunction: 'ease-in-out'
              }}
            >
              <CardsProduct
                cameraId={cameraId}
                fetch={fetchDataSimilarProduct}
                selector={dataSimilaCameras}
                onSetWindowAddProduct={onSetMadalWindowAddProduct}
              />
            </div>
            <button
              className="slider-controls slider-controls--prev"
              type="button"
              aria-label="Предыдущий слайд"
              onMouseDown={() => {
                dispatch(showFewerCards());
                handlerOffsetLeft();
              }}
              disabled={!!(valueCaunter === 3)}
            >
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
            <button
              className="slider-controls slider-controls--next"
              type="button"
              aria-label="Следующий слайд"
              onMouseDown={() => {
                dispatch(showMoreCards());
                handlerOffsetRight();
              }}
              disabled={!!(dataCameras !== null && valueCaunter >= dataCameras.length)}
            >
              <svg width="7" height="12" aria-hidden="true" >
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SimilaListCamera;
