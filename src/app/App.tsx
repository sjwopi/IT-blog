import { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

function App() {
  const { theme } = useTheme();
  const dispath = useDispatch();

  useEffect(() => {
    dispath(userActions.initAuthData());
  }, [dispath]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
export default App;
