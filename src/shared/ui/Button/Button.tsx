import classNames from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
  DEFAULT = 'default'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme] ]) }
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
