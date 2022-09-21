import ShowMoreIcon from '../assets/icons/show-more-icon.svg';

type Props = {
  onClick: () => void;
};

const ShowMoreButton = ({ onClick }: Props) => {
  return (
    <button
      className="flex gap-1 items-center mx-auto mt-8 hover:brightness-75 transition-all"
      onClick={onClick}
    >
      <ShowMoreIcon className="w-8 h-8 fill-secondaryFont" />
      <p className="text-secondaryFont font-bold">Show more</p>
    </button>
  );
};
export default ShowMoreButton;
