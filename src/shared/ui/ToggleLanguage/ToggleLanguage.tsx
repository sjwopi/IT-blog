import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ToggleLanguage.module.scss"

interface ToggleLanguageProps {
  className?: string;
}

export const ToggleLanguage = ({className}: ToggleLanguageProps) => {
  const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.translate, {}, [className])}
            theme={ThemeButton.DEFAULT}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
/* 
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
  ) */
};

export default ToggleLanguage;
