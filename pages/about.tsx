import { NextPage } from 'next';
import Heading from '../components/heading';
import Section from '../components/section';
import Container from '../components/container';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - BAYC Collection</title>
      </Head>
      <main className="min-h-screen">
        <Section>
          <Container>
            <Heading type="primary" className="mb-6 text-center md:text-start">
              About
            </Heading>
            <p className="text-secondaryFont">
              This website has been developed as part of a coding challenge.
            </p>
          </Container>
        </Section>
      </main>
    </>
  );
};
export default About;
