interface NFT {
  name: string;
  imageURL: string;
  price?: string;
  lastPrice?: string;
  owner: string;
  mintedAt: string;
  tokenId: string;
}

export default NFT;
