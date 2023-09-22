import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispath = useDispatch();

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal((prev) => false);
  }, []);
  const onShowAuthModal = useCallback(() => {
    setIsAuthModal((prev) => true);
  }, []);
  const onLogout = useCallback(() => {
    dispath(userActions.logout());
  }, [dispath]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.BTN}
          className={cls.createArticle}
        >
          {t('Создать')}
        </AppLink>

        <Button
          theme={ButtonTheme.BACKGROUND}
          className={cls.licks}
          onClick={onShowAuthModal}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      {/* <Text className={cls.appName} title="asdf"></Text> */}
      <Button
        theme={ButtonTheme.BACKGROUND}
        className={cls.licks}
        onClick={onShowAuthModal}
      >
        {t('Войти')}
      </Button>

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
      )}
    </div>
  );
});
