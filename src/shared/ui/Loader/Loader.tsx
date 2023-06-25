import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
  <div className={classNames(cls.ldsRipple, {}, [className])}>
    <div />
    <div />
  </div>
));

export default Loader;
