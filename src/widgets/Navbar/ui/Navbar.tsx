import { Link } from "react-router-dom";
import classNames from "shared/lib/classNames/classNames";
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(cls.Navbar, {} , [className])}>
      <button
        className={classNames('tog-theme', {}, [theme])}
        onClick={toggleTheme}
      ></button>
      <div className={cls.links}>
        <Link to={'/'} className={cls.link}>Main</Link>
        <Link to={'/about'} className={cls.link}>asdf</Link>
      </div>
    </div>
  )
};
