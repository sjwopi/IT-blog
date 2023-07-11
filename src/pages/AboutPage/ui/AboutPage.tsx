import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export const AboutPage = memo(() => {
  const { t } = useTranslation();
  return <Page>{t('О сайте')}</Page>;
});

export default AboutPage;
