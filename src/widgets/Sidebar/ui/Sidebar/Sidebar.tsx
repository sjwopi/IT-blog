import { classNames } from 'shared/lib/classNames/classNames';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import ToggleLanguage from 'shared/ui/ToggleLanguage/ToggleLanguage';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
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
        {SidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>

      <div className={cls.switchers}>
        <ToggleLanguage className={cls.toggleLang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
});
