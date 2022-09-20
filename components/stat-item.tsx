import React from 'react';

type Props = {
  label: string;
  icon: React.ReactElement;
};

const StatItem = ({ icon, label }: Props) => {
  return (
    <li className="flex gap-1 items-center">
      {icon}
      <p className="text-xs text-secondaryFont">{label}</p>
    </li>
  );
};
export default StatItem;
