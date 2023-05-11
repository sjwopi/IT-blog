import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "../Button/Button";
import classNames from "shared/lib/classNames/classNames";
import cls from "./ToggleLanguage.module.scss"

interface ToggleLanguageProps {
  className?: string;
}

export const ToggleLanguage = ({className}: ToggleLanguageProps) => {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div>
      <Button
        className={classNames(cls.translate, {}, [className])}
        onClick={onToggle}
        theme={ThemeButton.DEFAULT}
      >
        {t('translate')}
      </Button>
    </div>
  )
};

export default ToggleLanguage;
