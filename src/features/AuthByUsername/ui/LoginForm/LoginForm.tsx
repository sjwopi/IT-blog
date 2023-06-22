import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        placeholder={t('Введите username')}
        type="text"
        onChange={onChange}
      />
      <Input
        placeholder={t('Ввендите пароль')}
        type="text"
        onChange={onChange}
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};

export default LoginForm;
