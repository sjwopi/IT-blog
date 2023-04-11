import classNames from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/change-theme.svg'
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [theme, className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      <ThemeIcon width={40} height={40}/>
    </Button>
  );
};

export default ThemeSwitcher;
