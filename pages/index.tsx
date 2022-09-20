import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Container from '../components/container';
import Heading from '../components/heading';
import NFTCard from '../components/nft-card';
import Section from '../components/section';
import NFT from '../models/nft';
import { fetchNFTs } from '../utils/nft-controller';

const Home: NextPage = () => {
  const [NFTs, setNFTs] = useState<NFT[]>([]);

  useEffect(() => {
    fetchNFTs().then((NFTs) => setNFTs(NFTs));
  }, []);

  return (
    <main className="min-h-screen">
      <Section>
        <Container>
          <Heading type="primary" className="mb-6 text-center md:text-start">
            The BAYC Collection
          </Heading>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
            {NFTs.map((NFT, index) => (
              <NFTCard key={index} NFT={NFT} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default Home;
