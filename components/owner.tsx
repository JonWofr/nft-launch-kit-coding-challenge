import Avatar from './avatar';

type Props = {
  address: string;
};

const Owner = ({ address }: Props) => {
  const truncateAddress = (address: string) => {
    return `${address.substring(0, 5)}...${address.substring(
      address.length - 4
    )}`;
  };

  return (
    <div className="flex gap-2 items-center">
      <Avatar address={address} size={24} />
      <p className="text-xs text-secondaryFont">{truncateAddress(address)}</p>
    </div>
  );
};
export default Owner;
