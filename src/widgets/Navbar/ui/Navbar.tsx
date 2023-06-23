import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('about');
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
        <Button
          theme={ButtonTheme.BACKGROUND}
          className={cls.licks}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.BACKGROUND}
        className={cls.licks}
        onClick={onShowAuthModal}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
    </div>
  );
};
