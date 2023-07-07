import { stringValue } from '../../const/const';

type SetValueSort = React.Dispatch<React.SetStateAction<{
  priceOfPopularity: string;
  descendingOfAscending: string;
}>>

type ValueSort = {
  priceOfPopularity: string;
  descendingOfAscending: string;
}

type SortProps = {
  onSetValueSort: SetValueSort;
  valueSort: ValueSort;
}

function Sort({onSetValueSort, valueSort}: SortProps): JSX.Element {

  const [price, reviewCount, descending, ascending] = stringValue;

  return(
    <form action="#">
      <div className="catalog-sort__inner">
        <p className="title title--h5">Сортировать:</p>
        <div className="catalog-sort__type">
          <div
            className="catalog-sort__btn-text"
          >
            <input
              type="radio"
              id="sortPrice"
              name="sort"
              checked={valueSort.priceOfPopularity === price}
              onChange={() => {
                onSetValueSort({
                  priceOfPopularity: price,
                  descendingOfAscending: descending
                });
              }}
            >
            </input>
            <label htmlFor="sortPrice">по цене</label>
          </div>
          <div
            className="catalog-sort__btn-text"
          >
            <input
              type="radio"
              id="sortPopular"
              name="sort"
              checked={valueSort.priceOfPopularity === reviewCount}
              onChange={() => {
                onSetValueSort({
                  priceOfPopularity: reviewCount,
                  descendingOfAscending: descending
                });
              }}
            >
            </input>
            <label htmlFor="sortPopular">по популярности</label>
          </div>
        </div>
        <div className="catalog-sort__order">
          <div className="catalog-sort__btn catalog-sort__btn--up">
            <input
              type="radio"
              id="up"
              name="sort-icon"
              aria-label="По возрастанию"
              checked={valueSort.descendingOfAscending === ascending}
              onChange={() => {
                onSetValueSort({
                  ...valueSort,
                  descendingOfAscending: ascending
                });
              }}
            >
            </input>
            <label htmlFor="up">
              <svg width="16" height="14" aria-hidden="true">
                <use xlinkHref="#icon-sort"></use>
              </svg>
            </label>
          </div>
          <div className="catalog-sort__btn catalog-sort__btn--down">
            <input
              type="radio"
              id="down"
              name="sort-icon"
              aria-label="По убыванию"
              checked={valueSort.descendingOfAscending === descending}
              onChange={() => {
                onSetValueSort({
                  ...valueSort,
                  descendingOfAscending: descending
                });
              }}
            >
            </input>
            <label htmlFor="down">
              <svg width="16" height="14" aria-hidden="true">
                <use xlinkHref="#icon-sort"></use>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Sort;
