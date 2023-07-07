import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getSidebarItem } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import ToggleLanguage from 'shared/ui/ToggleLanguage/ToggleLanguage';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/types/sidebar';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItem);

  const itemsList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
  )), [collapsed, sidebarItemsList]);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

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
        {itemsList}
      </div>

      <div className={cls.switchers}>
        <ToggleLanguage className={cls.toggleLang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
});
