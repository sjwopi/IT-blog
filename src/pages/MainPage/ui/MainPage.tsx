import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MainPage.module.scss"
import { useTranslation } from "react-i18next";

interface MainPageProps {
  className?: string;
}

export const MainPage = ({className}: MainPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.MainPage, {} , [className])}>
    {t('Главная страница')}
    </div>
  )
};

export default MainPage;
