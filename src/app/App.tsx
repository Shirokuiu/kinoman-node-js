import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageRoutes } from 'src/constants/routes';
import WrappedSvgSprite from 'src/hocks/wrapped-svg-sprite/wrapped-svg-sprite';
import MainPage from 'src/pages/main-page/main-page';

function App() {
  return (
    <>
      <Routes>
        <Route path={PageRoutes.Index}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
      <WrappedSvgSprite />
    </>
  );
}

export default App;
