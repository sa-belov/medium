import React, { Suspense } from 'react';
import NavBar from './NavBar/NavBar';
import { appRoutes } from '../../router/routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.sass';

function App() {
  const renderRoutes = () => {
    return appRoutes.map(({ id, path, component: Component }) => (
      <Route path={path} key={id} element={<Component />} />
    ));
  };

  return (
    <div className={styles.container}>
      <div>
        <NavBar />
        <div style={{ width: '100px' }} />
      </div>
      <Suspense fallback={<h1>Гружусь ебать...</h1>}>
        <Routes>{renderRoutes()}</Routes>
      </Suspense>
      <div style={{ background: 'black', padding: '0 30px' }}>
        <input type="text" style={{ width: '300px' }} />
      </div>
    </div>
  );
}

export default App;
