import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useState } from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outlineInverted',
}

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  theme?: InputTheme;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    theme = InputTheme.CLEAR,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cls.inputContainer}>
      {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
      <input
        className={classNames(cls.Input, { [cls[theme]]: true }, [className])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
