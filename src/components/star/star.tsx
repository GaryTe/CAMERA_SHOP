import { returnListNumber } from '../../util/util';

type StarProps = {
  result: number;
}

function Star({result}: StarProps): JSX.Element {
  return(
    <>
      {returnListNumber(4).map((number) =>

        (
          <svg key={number} width="17" height="16" aria-hidden="true">
            <use xlinkHref={result >= number ? '#icon-full-star' : '#icon-star'}></use>
          </svg>
        )
      )}
    </>
  );
}

export default Star;
