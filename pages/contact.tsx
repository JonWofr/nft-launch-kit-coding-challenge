import { NextPage } from 'next';
import Heading from '../components/heading';
import Section from '../components/section';
import Container from '../components/container';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - BAYC Collection</title>
      </Head>
      <main className="min-h-screen">
        <Section>
          <Container>
            <Heading type="primary" className="mb-6 text-center md:text-start">
              Contact
            </Heading>
            <ul>
              <li>
                <a
                  href="https://jonas-wolfram.com"
                  className="underline text-secondaryFont"
                  target="_blank"
                  rel="noreferrer"
                >
                  My portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/jonas_wolfram"
                  className="underline text-secondaryFont"
                  target="_blank"
                  rel="noreferrer"
                >
                  My Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JonWofr"
                  className="underline text-secondaryFont"
                  target="_blank"
                  rel="noreferrer"
                >
                  My GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@jonas-wolfram.com"
                  className="underline text-secondaryFont"
                  target="_blank"
                  rel="noreferrer"
                >
                  My mail
                </a>
              </li>
            </ul>
          </Container>
        </Section>
      </main>
    </>
  );
};
export default Contact;
