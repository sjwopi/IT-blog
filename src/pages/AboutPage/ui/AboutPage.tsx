import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';

export const AboutPage = memo(() => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.AboutPage, {}, [])}>
      {t('О сайте')}
    </div>
  );
});

export default AboutPage;
