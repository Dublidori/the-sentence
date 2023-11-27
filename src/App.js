import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/theme';
import Layout from './components/Layout';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = '36cac5156311413d288cbb0faaa4f367'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <WagmiConfig config={wagmiConfig}>
                <Layout />
            </WagmiConfig>

            <Web3Modal 
                projectId={projectId} 
                ethereumClient={ethereumClient}
            />
        </ThemeProvider>
    );
}

export default App;
