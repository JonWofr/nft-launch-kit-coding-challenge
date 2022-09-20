import type { NextPage } from 'next';
import Container from '../components/container';
import Heading from '../components/heading';
import NFTCard from '../components/nft-card';
import Section from '../components/section';
import NFT from '../models/nft';

const Home: NextPage = () => {
  const NFTs: NFT[] = [
    {
      name: 'Bored ape',
      imageURL: '',
      price: 5,
      likes: 100,
      views: 500,
      lastPrice: 4,
    },
    {
      name: 'Bored ape',
      imageURL: '',
      price: 5,
      likes: 100,
      views: 500,
      lastPrice: 4,
    },
    {
      name: 'Bored ape',
      imageURL: '',
      price: 5,
      likes: 100,
      views: 500,
      lastPrice: 4,
    },
    {
      name: 'Bored ape',
      imageURL: '',
      price: 5,
      likes: 100,
      views: 500,
      lastPrice: 4,
    },
  ];
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
