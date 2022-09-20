import classNames from 'classnames';
import NextLink from 'next/link';
import { useState } from 'react';
import ApesLogo from '../assets/logos/apes-logo.svg';
import MenuIcon from '../assets/icons/menu-icon.svg';
import { ConnectButton } from '@rainbow-me/rainbowkit';

type Link = { href: string; label: string };

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const links: Link[] = [
    {
      href: '/',
      label: 'Link 1',
    },
    {
      href: '/',
      label: 'Link 2',
    },
    {
      href: '/',
      label: 'Link 3',
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-10 backdrop-blur-md bg-secondaryBackground bg-opacity-60 md:py-3">
      <div className="md:container md:flex md:justify-between md:items-center">
        <div className="container flex justify-between py-3 md:w-auto md:max-w-none md:mx-0 md:p-0">
          <NextLink href="/">
            <a>
              <ApesLogo />
            </a>
          </NextLink>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden"
          >
            <MenuIcon width="40" height="40" className="fill-primaryFont" />
          </button>
        </div>
        <nav
          className={classNames(
            'h-0 overflow-hidden transition-all md:h-auto md:overflow-visible',
            {
              // Height has to be explicitly set rather than auto in order for it to be animated
              'h-[calc(1rem_+_3_*_1.5rem_+_2_*_0.25rem_+_1.5rem_+_40px_+_1rem)]':
                isExpanded,
            }
          )}
        >
          <div className="container py-4 flex flex-col gap-6 items-center md:py-0 md:w-auto md:max-w-none md:mx-0 md:px-0 md:flex-row md:gap-12">
            <ul className="flex flex-col gap-1 items-center md:flex-row md:gap-8">
              {links.map((link, index) => (
                <li key={index}>
                  <NextLink href={link.href}>
                    <a className="text-primaryFont uppercase tracking-widest text-xs">
                      {link.label}
                    </a>
                  </NextLink>
                </li>
              ))}
            </ul>
            <ConnectButton />
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
