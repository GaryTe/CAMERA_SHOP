import {useRef} from 'react';
import { CardProduct } from '../../types/types-response/types-response';
import { useAppDispatch } from '../../hooks/use-store/use-store';
import { useUnlockScroll } from '../../hooks/use-unlock-scroll/use-unlock-scroll';
import { addProductInCart } from '../../store/reducers/get-product-in-cart/get-product-in-cart';
import { useShiftFocus } from '../../hooks/use-shift-focus/use-shift-focus';
import { shiftFocus } from '../../util/util';

type SetModalWindow = React.Dispatch<React.SetStateAction<CardProduct | null>>
type SetMadalWindowAddProduct = React.Dispatch<React.SetStateAction<boolean | null>>

type AddProductProps = {
dataProduct: CardProduct;
onSetModalWindow: SetModalWindow | SetMadalWindowAddProduct;
}

function AddProduct({dataProduct, onSetModalWindow}: AddProductProps): JSX.Element {
  const dispatch = useAppDispatch();
  const refButton = useRef(null);

  useUnlockScroll<SetModalWindow | SetMadalWindowAddProduct>(onSetModalWindow);

  const {
    name,
    vendorCode,
    type,
    level,
    price,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x
  } = dataProduct;

  useShiftFocus(refButton);

  return(
    <div className="modal is-active" onClick={() => {onSetModalWindow(null);}}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" onKeyDown={(evt) => shiftFocus(evt, refButton)}>
          <p className="title title--h4">Добавить товар в корзину</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp" src={previewImgWebp} srcSet={previewImgWebp2x}></source>
                <img src={previewImg} srcSet={previewImg2x} width="140" height="120" alt="Фотоаппарат «Орлёнок»"></img>
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item">
                  <span className="basket-item__article">Артикул:</span>
                  <span className="basket-item__number">{vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{type} фотокамера</li>
                <li className="basket-item__list-item">{level} уровень</li>
              </ul>
              <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price}</p>
            </div>
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={() => {
                onSetModalWindow(null);
                dispatch(addProductInCart(dataProduct));
              }}
              ref={refButton}
            >
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
          >
            <svg width="10" height="10" aria-hidden="true" onClick={() => onSetModalWindow(null)}>
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
