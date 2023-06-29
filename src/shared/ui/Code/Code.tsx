import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
}

export const Code = ({ className }: CodeProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      {t('Главная страница')}
    </div>
  );
};

export default Code;
