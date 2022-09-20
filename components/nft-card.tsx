import NFT from '../models/nft';
import AspectRatioContainer from './aspect-ratio-container';
import Creator from './creator';
import Heading from './heading';
import EthereumIconAccent from '../assets/icons/ethereum-icon-accent.svg';
import StatItem from './stat-item';
import HeartIcon from '../assets/icons/heart-icon.svg';
import EyeIcon from '../assets/icons/eye-icon.svg';
import EthereumIconWhite from '../assets/icons/ethereum-icon-white.svg';

type Props = {
  NFT: NFT;
};

const NFTCard = ({ NFT: { name, imageURL, price, lastPrice } }: Props) => {
  return (
    <article className="flex flex-col bg-secondaryBackground rounded-xl overflow-hidden min-h-[400px]">
      <AspectRatioContainer>
        <img src={imageURL} className="w-full h-full object-cover" />
      </AspectRatioContainer>
      <header className="p-4 flex justify-between items-start">
        <div>
          <Creator name="jonas-wolfram.eth" avatarURL="/images/DSC03595.jpg" />
          <Heading type="secondary">{name}</Heading>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-primaryFont font-bold text-xl">{price}</p>
          <EthereumIconAccent />
        </div>
      </header>
      <hr className="border-[#667399] mt-auto" />
      <footer className="p-4">
        <ul className="flex gap-3">
          <StatItem
            icon={<HeartIcon className="fill-secondaryFont w-4 h-4" />}
            label={`5 favorites`}
          />
          <StatItem icon={<EyeIcon />} label={`5 views`} />
          {lastPrice && (
            <StatItem
              icon={<EthereumIconWhite />}
              label={`${lastPrice} last`}
            />
          )}
        </ul>
      </footer>
    </article>
  );
};
export default NFTCard;
