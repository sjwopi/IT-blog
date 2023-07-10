import { BugButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';
import cls from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={classNames(cls.MainPage, {}, [])}>
      {t('Главная страница')}
      <BugButton />
    </Page>
  );
};

export default memo(MainPage);
