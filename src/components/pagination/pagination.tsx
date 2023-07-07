import {useState} from 'react';
import { returnListNumber } from '../../util/util';
import { listCamera } from '../../types/types-response/types-response';

type SetCurrentPage = React.Dispatch<React.SetStateAction<number>>

type PaginationProps = {
  products: listCamera | null;
  productPerPage: number;
  onSetCurrentPage: SetCurrentPage;
}

function Pagination({products, productPerPage, onSetCurrentPage}: PaginationProps): JSX.Element {
  const [item, setItem] = useState(1);

  return(
    <div className="pagination">
      <ul className="pagination__list">
        {products && (item > products.length / productPerPage || item > 1) &&
          <li
            className="pagination__item"
            onClick={() => {
              setItem(item - 1);
              onSetCurrentPage((page) => page - 1);
            }}
          >
            <a
              className = "pagination__link pagination__link--text"
              href="#todo"
            >
            Назад
            </a>
          </li>}
        {products && returnListNumber(products.length / productPerPage).map((number) =>
          (
            <li
              key={number}
              className="pagination__item"
              onClick={() => {
                setItem(number);
                onSetCurrentPage(number);
              }}
            >
              <a
                className= {item === number ? 'pagination__link pagination__link--active' : 'pagination__link'}
                href="#todo"
              >
                {number}
              </a>
            </li>
          )
        )}
        {products && item < products.length / productPerPage &&
          <li
            className="pagination__item"
            onClick={() => {
              setItem(item + 1);
              onSetCurrentPage((page) => page + 1);
            }}
          >
            <a
              className = "pagination__link pagination__link--text"
              href="#todo"
            >
            Далее
            </a>
          </li>}
      </ul>
    </div>
  );
}

export default Pagination;
