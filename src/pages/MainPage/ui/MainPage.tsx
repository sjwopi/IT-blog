import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import cls from './MainPage.module.scss';

export const MainPage = memo(() => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.MainPage, {}, [])}>
      {t('Главная страница')}
      <BugButton />
    </div>
  );
});

export default MainPage;
