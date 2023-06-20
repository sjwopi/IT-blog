import { classNames } from 'shared/lib/classNames/classNames';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, Button, ButtonSize } from 'shared/ui/Button/Button';
import ToggleLanguage from 'shared/ui/ToggleLanguage/ToggleLanguage';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(!collapsed);
  };
  const { t } = useTranslation();
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        size={ButtonSize.S}
      >
        {collapsed ? t('Открыть') : t('Закрыть')}
      </Button>

      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.main}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная страница')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.about}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О сайте')}</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ToggleLanguage className={cls.toggleLang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
