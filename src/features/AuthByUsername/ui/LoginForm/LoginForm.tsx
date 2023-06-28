import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispath/useAppDispath';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginStateUsername } from '../../model/selectors/getLoginStateUsername/getLoginStateUsername';
import { getLoginStatePassword } from '../../model/selectors/getLoginStatePassword/getLoginStatePassword';
import { getLoginStateIsLoading } from '../../model/selectors/getLoginStateIsLoading/getLoginStateIsLoading';
import { getLoginStateError } from '../../model/selectors/getLoginStateError/getLoginStateError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  onSuccess: () => void;
  className?: string;
}
const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispath = useAppDispatch();
  const username = useSelector(getLoginStateUsername);
  const password = useSelector(getLoginStatePassword);
  const isLoading = useSelector(getLoginStateIsLoading);
  const error = useSelector(getLoginStateError);

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

  const onLoginClick = useCallback(async () => {
    const result = await dispath(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispath, password, username, onSuccess]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text
          className={cls.loginTitle}
          title={t('Форма авторизации')}
          theme={TextTheme.SECONDARY}
        />
        {error && (
          <Text
            className={cls.loginTitle}
            text={t('error')}
            theme={TextTheme.ERROR}
          />
        )}
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
        <Button
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
