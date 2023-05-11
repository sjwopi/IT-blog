import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('MainT')}
    </div>
  )
};

export default MainPage;
