import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation();
  return (
    <div>
      {t('AboutT')}
    </div>
  );
}

export default AboutPage;
