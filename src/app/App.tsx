import './styles/index.scss';

import { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

function App() {
  const { theme } = useTheme();

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
