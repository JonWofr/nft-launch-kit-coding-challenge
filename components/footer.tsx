import Container from './container';
import HeartIcon from '../assets/icons/heart-icon.svg';

const Footer = () => {
  return (
    <footer className="py-32 bg-gradient-to-r from-primaryAccentFrom to-primaryAccentTo">
      <Container className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
        <p className="w-60 text-primaryFont text-2xl text-center md:text-end">
          Created with
        </p>
        <HeartIcon className="fill-white h-8 w-8" />
        <p className="w-60 text-primaryFont text-2xl text-center md:text-start">
          by{' '}
          <a
            href="https://jonas-wolfram.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:brightness-75 transition-all"
          >
            Jonas Wolfram
          </a>
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
