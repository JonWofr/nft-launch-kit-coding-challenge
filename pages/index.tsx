import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import Container from '../components/container';
import FadeIn from '../components/fade-in';
import Heading from '../components/heading';
import NFTCard from '../components/nft-card';
import Section from '../components/section';
import ShowMoreButton from '../components/show-more-button';
import Spinner from '../components/spinner';
import NFT from '../models/nft';
import { fetchNFTs } from '../utils/nft-controller';

const Home: NextPage = () => {
  const [NFTs, setNFTs] = useState<NFT[]>([]);
  const [shouldShowSpinner, setShouldShowSpinner] = useState(true);
  // Used for pagination of NFTs
  const continuationRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Handles data fetching logic and gives feedback on the UI accordingly.
   * @param lastContinuation A reference of the last fetch. Used to paginate the data.
   */
  const fetchData = async (lastContinuation?: string) => {
    try {
      setShouldShowSpinner(true);
      const [continuation, NFTs] = await fetchNFTs(lastContinuation);
      continuationRef.current = continuation;
      setNFTs((oldNFTs) => {
        return [...oldNFTs, ...NFTs];
      });
    } catch (err) {
      console.error(err);
    } finally {
      setShouldShowSpinner(false);
    }
  };

  return (
    <>
      <Head>
        <title>BAYC Collection</title>
      </Head>
      <main className="min-h-screen">
        <Section>
          <Container>
            <Heading type="primary" className="mb-6 text-center md:text-start">
              The BAYC Collection
            </Heading>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
              {NFTs.map((NFT, index) => (
                <FadeIn key={index}>
                  <NFTCard NFT={NFT} />
                </FadeIn>
              ))}
            </div>
            {shouldShowSpinner ? (
              <div className="h-[400px] relative">
                <Spinner />
              </div>
            ) : (
              <ShowMoreButton
                onClick={() => fetchData(continuationRef.current)}
              />
            )}
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Home;
