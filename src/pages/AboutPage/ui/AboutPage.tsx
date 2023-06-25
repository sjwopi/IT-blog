import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
  className?: string;
}

export const AboutPage = memo(({ className }: AboutPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.AboutPage, {}, [className])}>
      {t('О сайте')}
    </div>
  );
});

export default AboutPage;
