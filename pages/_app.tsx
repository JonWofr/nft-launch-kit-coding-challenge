import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Footer from '../components/footer';
import Header from '../components/header';
import '@rainbow-me/rainbowkit/styles.css';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import Avatar from '../components/avatar';

const fullConfig = resolveConfig(tailwindConfig);

const { chains, provider } = configureChains(
  [chain.mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'BAYC Collection',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: `linear-gradient(to right, ${
            (fullConfig.theme?.gradientColorStops as any).primaryAccentFrom
          }, ${(fullConfig.theme?.gradientColorStops as any).primaryAccentTo})`,
        })}
        avatar={({ address }) => <Avatar address={address} />}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
