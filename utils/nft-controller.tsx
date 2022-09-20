import GetItemsByCollectionResponse from '../models/get-items-by-collection-response';
import GetListActivitiesByItemResponse from '../models/get-list-activities-by-item-response';
import GetOwnershipsByItemsResponse from '../models/get-ownerships-by-item-response';
import NFT from '../models/nft';

const RARIBLE_API_URL = 'https://api.rarible.org/v0.1';
const BAYC_COLLECTION_ADDRESS = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';
const NETWORK = 'ETHEREUM';

export const fetchNFTs = async (): Promise<NFT[]> => {
  const { items, continuation }: GetItemsByCollectionResponse = await fetch(
    `${RARIBLE_API_URL}/items/byCollection?collection=${NETWORK}:${BAYC_COLLECTION_ADDRESS}&&size=5`
  ).then((response) => response.json());

  const NFTs = await Promise.all(
    items.map(async (item) => {
      if (!item.meta || !item.tokenId) throw new Error('Invalid NFT data');
      const content = item.meta.content;
      if (content.length === 0) throw new Error('Invalid NFT data');

      const [owner, price] = await Promise.all([
        getOwner(item.tokenId),
        getPrice(item.tokenId),
      ]);

      return {
        name: item.meta.name,
        imageURL: content[0].url,
        price,
        lastPrice: item.lastSale?.price,
        owner,
      };
    })
  );

  return NFTs;
};

const getOwner = async (tokenId: string) => {
  const { ownerships }: GetOwnershipsByItemsResponse = await fetch(
    `${RARIBLE_API_URL}/ownerships/byItem?itemId=${NETWORK}:${BAYC_COLLECTION_ADDRESS}:${tokenId}`
  ).then((response) => response.json());
  if (ownerships.length === 0) throw new Error('Invalid NFT data');
  // The owner property of an ownership is in the format ${blockchainGroup}:${token}. To get the address of the owner the string
  // needs to be split.
  const owner = ownerships[0].owner.split(':')[1];
  return owner;
};

const getPrice = async (tokenId: string) => {
  const { activities: listActivities }: GetListActivitiesByItemResponse =
    await fetch(
      `${RARIBLE_API_URL}/activities/byItem?type=LIST&&itemId=${NETWORK}:${BAYC_COLLECTION_ADDRESS}:${tokenId}`
    ).then((response) => response.json());
  const price = listActivities.length > 0 ? listActivities[0].price : undefined;
  return price;
};
