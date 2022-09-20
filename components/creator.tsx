type Props = {
  name: string;
  avatarURL: string;
};

const Creator = ({ name, avatarURL }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <img
        src={avatarURL}
        className="w-[20px] h-[20px] object-cover rounded-full"
      />
      <p className="text-xs text-secondaryFont">{name}</p>
    </div>
  );
};
export default Creator;
