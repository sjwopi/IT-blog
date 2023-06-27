import { ModsType, classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useState } from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outlineInverted',
}

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  theme?: InputTheme;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    theme = InputTheme.CLEAR,
    onChange,
    type = 'text',
    placeholder,
    readonly,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: ModsType = {
    [cls[theme]]: true,
    [cls.readonly]: readonly,
  };

  return (
    <div className={cls.inputContainer}>
      {placeholder && <div className={classNames(cls.placeholder, {}, [cls[theme]])}>{placeholder}</div>}
      <input
        className={classNames(cls.Input, mods, [className])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
