import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      {t('Главная страница')}
      <BugButton />
      <Counter />
    </div>
  );
};

export default MainPage;
