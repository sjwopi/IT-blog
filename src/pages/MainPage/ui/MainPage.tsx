import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

export const MainPage = memo(({ className }: MainPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      {t('Главная страница')}
      <BugButton />
    </div>
  );
});

export default MainPage;
