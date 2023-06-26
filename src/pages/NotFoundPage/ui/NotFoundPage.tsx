import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = memo(() => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [])}>
      {t('Страница не найдена')}
    </div>
  );
});
