import { classNames } from 'shared/lib/classNames/classNames';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import ToggleLanguage from 'shared/ui/ToggleLanguage/ToggleLanguage';
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
          <div className={cls.switchers}>
              <ToggleLanguage className={cls.toggleLang} />
              <ThemeSwitcher />
          </div>

          <Button
              data-testid="sidebar-toggle"
              className={classNames(cls.openBtn, {}, [])}
              onClick={onToggle}
              theme={ThemeButton.DEFAULT}
          >
              {collapsed ? t('Открыть') : t('Закрыть')}
          </Button>
      </div>
  );
};

export default Sidebar;
