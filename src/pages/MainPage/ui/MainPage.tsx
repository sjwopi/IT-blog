import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();

  return (
    <div>
      {t('MainT')}
    </div>
  );
}

export default MainPage;
