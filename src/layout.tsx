import clsx from 'clsx';
import classes from 'classnames'

type LayoutProps = {
  horizontalAlign?: 'start' | 'end' | 'center' | 'stretch';
  verticalAlign?: 'start' | 'end' | 'center' | 'stretch';
  gap?:number;
  className?: string;
  children: React.ReactNode;
};

type Size = 12;
const DEFAULT_SIZE: Size = 12;
const GAP_SIZE = 4;

export const Layout: React.FC<LayoutProps> = ({
  className,
  horizontalAlign,
  verticalAlign,
  children,
  ...rest
}) => {
  const style = classes(
    'grid',
    `gap-${GAP_SIZE}`,
    `grid-cols-${DEFAULT_SIZE}`,
    {
      [`justify-items-${horizontalAlign}`]: horizontalAlign,
      [`items-${verticalAlign}`]: verticalAlign,
    },
    className
  );

  return (
    <div className={style} {...rest}>
      {children}
    </div>
  );
};
