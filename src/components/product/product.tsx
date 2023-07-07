import {Link} from 'react-router-dom';
import Star from '../star/star';
import { CardProduct } from '../../types/types-response/types-response';
import { Path } from '../../const/const';
import { Fragment } from 'react';
import { returnNumber } from '../../util/util';

type SetModalWindow = React.Dispatch<React.SetStateAction<CardProduct | null>>
type SetMadalWindowAddProduct = React.Dispatch<React.SetStateAction<boolean | null>>

type ProductProps = {
  products: CardProduct[] | undefined;
  onSetModalWindow?: SetModalWindow;
  onSetWindowAddProduct?: SetMadalWindowAddProduct;
}

function Product({products, onSetModalWindow, onSetWindowAddProduct}: ProductProps): JSX.Element {

  return(
    <>
      {products && products.map((product) => {
        const {
          previewImg,
          previewImg2x,
          previewImgWebp,
          previewImgWebp2x,
          name,
          reviewCount,
          price,
          id
        } = product;

        const result = returnNumber(reviewCount);
        return(
          <Fragment key={id}>
            <div className="product-card is-active">
              <div className="product-card__img">
                <picture>
                  <source type="image/webp" src={previewImgWebp} srcSet={previewImgWebp2x}></source>
                  <img src={previewImg} srcSet={previewImg2x} width="280" height="240" alt={name}></img>
                </picture>
              </div>
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <Star result={result} />
                  <p className="visually-hidden">Рейтинг: 3</p>
                  <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
                </div>
                <p className="product-card__title">{name}</p>
                <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price}
                </p>
              </div>
              <div className="product-card__buttons">
                <button
                  className="btn btn--purple product-card__btn"
                  type="button"
                  onClick={() => {
                    if(onSetModalWindow) {
                      onSetModalWindow(product);
                      return;
                    }
                    if(onSetWindowAddProduct) {
                      onSetWindowAddProduct(true);
                    }
                  }}
                >
                  Купить
                </button>
                <Link className="btn btn--transparent" to={`${Path.Catalog}${Path.Product}${id}`}>Подробнее</Link>
              </div>
            </div>
          </Fragment>
        );
      })};
    </>
  );
}

export default Product;
