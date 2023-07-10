import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = memo(() => {
  const { t } = useTranslation('not-found');
  return (
    <Page className={classNames(cls.NotFoundPage, {}, [])}>
      {t('Страница не найдена')}
    </Page>
  );
});
