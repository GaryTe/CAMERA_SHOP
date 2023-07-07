import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Catalog from '../../pages/catalog/catalog';
import CardProduct from '../../pages/card-camera/card-camera';
import Basket from '../../pages/basket/basket';
import ScreenError from '../screen-error/screen-error';
import { Path } from '../../const/const';

function App(): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={Path.Catalog}>
          <Route index element={<Catalog />} />
          <Route path={Path.Product}>
            <Route path=':id' element={<CardProduct />} />
          </Route>
          <Route path={Path.Basket} element={<Basket />}></Route>
          <Route path={Path.Error} element={<ScreenError />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
