import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispath = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispath(loginActions.setUsername(value));
    },
    [dispath],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispath(loginActions.setPassword(value));
    },
    [dispath],
  );

  const onLoginClick = useCallback(() => {
    dispath(loginByUsername({ username, password }));
  }, [dispath, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text className={cls.loginTitle} title={t('Форма авторизации')} theme={TextTheme.SECONDARY} />
      {error && <Text className={cls.loginTitle} text={t('error')} theme={TextTheme.ERROR} />}
      <Input
        placeholder={t('Введите логин')}
        type="text"
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Введите пароль')}
        type="text"
        onChange={onChangePassword}
        value={password}
      />
      <Button className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
});

export default LoginForm;
