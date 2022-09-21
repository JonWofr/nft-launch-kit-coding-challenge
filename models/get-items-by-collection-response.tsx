/**
 * Part of the response model returned from the Rarible API https://multichain-api.rarible.org/v0.1/tag/item-controller#operation/getItemsByCollection
 */
interface GetItemsByCollectionResponse {
  continuation?: string;
  items: {
    meta?: {
      name: string;
      content: { url: string }[];
    };
    tokenId?: string;
    lastSale?: { price: string };
    mintedAt: string;
  }[];
}

export default GetItemsByCollectionResponse;
