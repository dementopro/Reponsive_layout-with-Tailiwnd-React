import clsx from 'clsx';
import classnames from 'classnames';

type LayoutItemProps = {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  smallDeviceSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  mediumDeviceSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  largeDeviceSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
  children: React.ReactNode;
};

export const LayoutItem: React.FC<LayoutItemProps> = ({
  size,
  smallDeviceSize,
  mediumDeviceSize,
  largeDeviceSize,
  className,
  children,
  ...rest
}) => {
  const style = clsx(
    {
      [`col-span-${size}`]: size,
      [`sm:col-span-${smallDeviceSize}`]: smallDeviceSize,
      [`md:col-span-${mediumDeviceSize}`]: mediumDeviceSize,
      [`lg:col-span-${largeDeviceSize}`]: largeDeviceSize,
    },
    className
  )

  return (
    <div className={style}>
      {children}
    </div>
  );
};
