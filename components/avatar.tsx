import Blockies from 'react-blockies';

type Props = {
  address: string;
  size?: number;
};

const Avatar = ({ address, size = 32 }: Props) => {
  return <Blockies seed={address} className="rounded-full" scale={size / 8} />;
};
export default Avatar;
