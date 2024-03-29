import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonTheme, Button } from '../Button/Button';
import cls from './ToggleLanguage.module.scss';

interface ToggleLanguageProps {
  className?: string;
}

export const ToggleLanguage = memo(({ className }: ToggleLanguageProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.translate, {}, [className])}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
});

export default ToggleLanguage;
