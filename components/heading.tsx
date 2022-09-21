import React from 'react';
import classNames from 'classnames';

type Props = {
  type: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ type, children, className }: Props) => {
  switch (type) {
    case 'primary':
      return (
        <h1
          className={classNames(
            'font-bold text-4xl text-primaryFont',
            className
          )}
        >
          {children}
        </h1>
      );
    case 'secondary':
      return (
        <h2
          className={classNames(
            'font-bold text-2xl text-primaryFont',
            className
          )}
        >
          {' '}
          {children}
        </h2>
      );
    default:
      return <>{children}</>;
  }
};
export default Heading;
