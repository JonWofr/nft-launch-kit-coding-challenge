import classNames from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={classNames('container', className)}>{children}</div>;
};
export default Container;
