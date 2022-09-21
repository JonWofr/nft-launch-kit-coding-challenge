import NFT from '../models/nft';
import AspectRatioContainer from './aspect-ratio-container';
import Owner from './owner';
import Heading from './heading';
import EthereumIconAccent from '../assets/icons/ethereum-icon-accent.svg';
import StatItem from './stat-item';
import MintIcon from '../assets/icons/pickaxe-icon.svg';
import EthereumIconWhite from '../assets/icons/ethereum-icon-white.svg';
import IdIcon from '../assets/icons/id-icon.svg';
import { BAYC_COLLECTION_ADDRESS } from '../utils/nft-controller';

type Props = {
  NFT: NFT;
};

const NFTCard = ({
  NFT: { name, imageURL, price, lastPrice, owner, mintedAt, tokenId },
}: Props) => {
  return (
    <a
      href={`https://rarible.com/token/${BAYC_COLLECTION_ADDRESS}:${tokenId}`}
      target="_blank"
      rel="noreferrer"
    >
      <article className="flex flex-col bg-secondaryBackground rounded-xl overflow-hidden min-h-[400px] hover:scale-[1.025] transition-transform">
        <AspectRatioContainer>
          <img
            src={imageURL}
            className="w-full h-full object-cover rounded-t-xl"
            alt=""
          />
        </AspectRatioContainer>
        <header className="p-4 flex justify-between items-start gap-1">
          <div>
            <Owner address={owner} />
            <Heading type="secondary" className="[overflow-wrap:_anywhere]">
              {name}
            </Heading>
          </div>
          {price && (
            <div className="flex gap-1 items-center">
              <p className="text-primaryFont font-bold text-xl">{price}</p>
              <EthereumIconAccent />
            </div>
          )}
        </header>
        <hr className="border-[#667399] mt-auto" />
        <footer className="p-4">
          <ul className="flex gap-3">
            <StatItem icon={<IdIcon />} label={tokenId} />
            <StatItem icon={<MintIcon />} label={mintedAt} />
            {lastPrice && (
              <StatItem
                icon={<EthereumIconWhite />}
                label={`${lastPrice} (last price)`}
              />
            )}
          </ul>
        </footer>
      </article>
    </a>
  );
};
export default NFTCard;
