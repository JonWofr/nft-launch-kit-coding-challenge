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
