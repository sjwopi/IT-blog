import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src = 'https://avatars.mds.yandex.net/i?id=fd4cc8e7a8fd887b57fb1659c624ec1b5e27c9ae-6250997-images-thumbs&ref=rim&n=33&w=230&h=150',
    size,
    ...otherProps
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      alt=""
      style={styles}
      {...otherProps}
    />
  );
});
