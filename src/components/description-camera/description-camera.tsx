import {useState} from 'react';
import Star from '../star/star';
import { CardProduct } from '../../types/types-response/types-response';
import { returnNumber } from '../../util/util';

type SetMadalWindowAddProduct = React.Dispatch<React.SetStateAction<boolean | null>>

type DescriptionCameraProps = {
  camera: CardProduct;
  onSetMadalWindowAddProduct: SetMadalWindowAddProduct;
}

function DescriptionCamera({camera, onSetMadalWindowAddProduct}: DescriptionCameraProps): JSX.Element {
  const [isSwitch, setIsSwitch] = useState(true);

  const {name,
    reviewCount,
    price,
    vendorCode,
    category,
    type,
    level,
    description,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x
  } = camera;

  const result = returnNumber(reviewCount);
  return(
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source type="image/webp" src={previewImgWebp} srcSet={previewImgWebp2x}></source>
              <img src={previewImg} srcSet={previewImg2x} width="560" height="480" alt={name}></img>
            </picture>
          </div>
          <div className="product__content">
            <h1 className="title title--h3">{name}</h1>
            <div className="rate product__rate">
              <Star result={result}/>
              <p className="visually-hidden">Рейтинг: 4</p>
              <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
            </div>
            <p className="product__price"><span className="visually-hidden">Цена:</span>{price}</p>
            <button
              className="btn btn--purple"
              type="button"
              onClick={() => onSetMadalWindowAddProduct(true)}
            >
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>
            <div className="tabs product__tabs">
              <div className="tabs__controls product__tabs-controls">
                <button
                  className={isSwitch ? 'tabs__control is-active' : 'tabs__control'}
                  type="button"
                  onClick={() => setIsSwitch(() => !isSwitch)}
                >
                  Характеристики
                </button>
                <button
                  className={!isSwitch ? 'tabs__control is-active' : 'tabs__control'}
                  type="button"
                  onClick={() => setIsSwitch(() => !isSwitch)}
                >
                  Описание
                </button>
              </div>
              <div className="tabs__content">
                <div className={isSwitch ? 'tabs__element is-active' : 'tabs__element'}>
                  <ul className="product__tabs-list">
                    <li className="item-list"><span className="item-list__title">Артикул:</span>
                      <p className="item-list__text">{vendorCode}</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Категория:</span>
                      <p className="item-list__text">{category}</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                      <p className="item-list__text">{type}</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Уровень:</span>
                      <p className="item-list__text">{level}</p>
                    </li>
                  </ul>
                </div>
                <div className={!isSwitch ? 'tabs__element is-active' : 'tabs__element'}>
                  <div className="product__tabs-text">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DescriptionCamera;
