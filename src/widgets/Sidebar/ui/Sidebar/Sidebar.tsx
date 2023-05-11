import classNames from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import ThemeSwitcher from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import { ThemeButton } from 'shared/ui/Button/Button';
import ToggleLanguage from 'shared/ui/ToggleLanguage/ToggleLanguage';

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
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.switchers}>
        <ToggleLanguage className={cls.toggleLang} />
        <ThemeSwitcher />
      </div>

      <Button
        className={classNames(cls.openBtn, {}, [])}
        onClick={onToggle}
        theme={ThemeButton.DEFAULT}
      >
        {collapsed ? t('Opened') : t('Closed')}
      </Button>

    </div>
  );
};

export default Sidebar;
