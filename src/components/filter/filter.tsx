import {FormEvent} from 'react';
import { Category, TypeCamera, LevelProduct } from '../../const/const';

type SetIndicatorFilter = React.Dispatch<React.SetStateAction<{
  category: string;
  typeCamera: string;
  levelProduct: string;
  priceFrom: string;
  priceTo: string;
}>>

type IndicatorFilter = {
  category: string;
  typeCamera: string;
  levelProduct: string;
  priceFrom: string;
  priceTo: string;
}

type FilterProps = {
  onSetIndicatorFilter: SetIndicatorFilter;
  indicatorFilter: IndicatorFilter;
}

function Filter({
  onSetIndicatorFilter,
  indicatorFilter
}: FilterProps): JSX.Element {

  return(
    <form action="#">
      <h2 className="visually-hidden">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Цена, ₽</legend>
        <div className="catalog-filter__price-range">
          <div className="custom-input">
            <label>
              <input
                type="number"
                name="price"
                placeholder="от"
                onInput={(evt: FormEvent<HTMLInputElement>) =>{
                  onSetIndicatorFilter({
                    ...indicatorFilter,
                    priceFrom: evt.currentTarget.value
                  });
                }}
              >
              </input>
            </label>
          </div>
          <div className="custom-input">
            <label>
              <input
                type="number"
                name="priceUp"
                placeholder="до"
                onInput={(evt: FormEvent<HTMLInputElement>) =>{
                  onSetIndicatorFilter({
                    ...indicatorFilter,
                    priceTo: evt.currentTarget.value
                  });
                }}
              >
              </input>
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Категория</legend>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="photocamera"
              checked={indicatorFilter.category === Category.Camera}
              onChange={() => {
                onSetIndicatorFilter({
                  ...indicatorFilter,
                  category: Category.Camera
                });
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Фотокамера</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="videocamera"
              checked={indicatorFilter.category === Category.Videocamera}
              onChange={() => {
                onSetIndicatorFilter({
                  ...indicatorFilter,
                  category: Category.Videocamera
                });
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Видеокамера</span>
          </label>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Тип камеры</legend>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="digital"
              checked={indicatorFilter.typeCamera === TypeCamera.Digital}
              onChange={() => {
                onSetIndicatorFilter({
                  ...indicatorFilter,
                  typeCamera: TypeCamera.Digital
                });
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Цифровая</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="film"
              checked={indicatorFilter.typeCamera === TypeCamera.Membranous}
              onChange={() => {
                onSetIndicatorFilter({
                  ...indicatorFilter,
                  typeCamera: TypeCamera.Membranous
                });
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Плёночная</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="snapshot"
              checked={indicatorFilter.typeCamera === TypeCamera.Instant}
              onChange={() => {
                onSetIndicatorFilter({
                  ...indicatorFilter,
                  typeCamera: TypeCamera.Instant
                });
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Моментальная</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="collection"
              checked={indicatorFilter.typeCamera === TypeCamera.Collection}
              onChange={() => {
                onSetIndicatorFilter({
                  ...indicatorFilter,
                  typeCamera: TypeCamera.Collection
                });
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Коллекционная</span>
          </label>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Уровень</legend>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="zero"
              checked={indicatorFilter.levelProduct === LevelProduct.Zero}
              onChange={() => {
                onSetIndicatorFilter({
                  ...indicatorFilter,
                  levelProduct: LevelProduct.Zero
                });
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Нулевой</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="non-professional"
              checked={indicatorFilter.levelProduct === LevelProduct.Amateur}
              onChange={() => {
                onSetIndicatorFilter({
                  ...indicatorFilter,
                  levelProduct: LevelProduct.Amateur
                });
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Любительский</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="professional"
              checked={indicatorFilter.levelProduct === LevelProduct.Professional}
              onChange={() => {
                onSetIndicatorFilter({
                  ...indicatorFilter,
                  levelProduct: LevelProduct.Professional
                });
              }}
            >
            </input>
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Профессиональный</span>
          </label>
        </div>
      </fieldset>
      <button
        className="btn catalog-filter__reset-btn"
        type="reset"
        onClick={() => {
          onSetIndicatorFilter({
            category: '',
            typeCamera: '',
            levelProduct: '',
            priceFrom: '',
            priceTo: ''
          });
        }}
      >
        Сбросить фильтры
      </button>
    </form>
  );
}

export default Filter;
