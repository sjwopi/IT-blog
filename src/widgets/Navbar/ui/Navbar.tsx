import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('about');
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.BACKGROUND}
        className={cls.licks}
        onClick={onToggleAuthModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleAuthModal}>
        {/* eslint-disable-next-line */}
        {t('Lorem ipsum dolor, sit amet consectetutempora vel repellat nulla nobis iure quidem nam voluptatibus temporeperferendis eveniet quasi commodi voluptatum beatae deserunt. Voluptateconsectetur eveniet?')}
      </Modal>
    </div>
  );
};
