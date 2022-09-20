import React from 'react';

type Props = {
  children: React.ReactNode;
};

const AspectRatioContainer = ({ children }: Props) => {
  return (
    <div className="pt-[56.25%] relative">
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};
export default AspectRatioContainer;
