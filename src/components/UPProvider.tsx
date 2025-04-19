import { createContext, useContext, useEffect, useState } from 'react';
import { Web3 } from 'web3';
import { createClientUPProvider, UPClientProvider } from '@lukso/up-provider';

interface UPContextType {
  isConnected: boolean;
  isExtensionAvailable: boolean;
  isConnecting: boolean;
  address: string | null;
  web3: Web3 | null;
  upProvider: UPClientProvider | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const UPContext = createContext<UPContextType | null>(null);

export function UPProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [isExtensionAvailable, setIsExtensionAvailable] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [upProvider, setUpProvider] = useState<UPClientProvider | null>(null);

  useEffect(() => {
    const checkExtension = async () => {
      const provider = await createClientUPProvider();
      setIsExtensionAvailable(!!provider);
    };
    checkExtension();
  }, []);

  const connect = async () => {
    try {
      setIsConnecting(true);
      const provider = await createClientUPProvider();
      if (!provider) throw new Error('No UP extension found');
      
      await provider.enable();
      const web3Instance = new Web3(provider);
      const accounts = await web3Instance.eth.getAccounts();
      
      setWeb3(web3Instance);
      setUpProvider(provider);
      setAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      console.error('Connection error:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
    setWeb3(null);
    setUpProvider(null);
  };

  return (
    <UPContext.Provider value={{
      isConnected,
      isExtensionAvailable,
      isConnecting,
      address,
      web3,
      upProvider,
      connect,
      disconnect
    }}>
      {children}
    </UPContext.Provider>
  );
}

export function useUP() {
  const context = useContext(UPContext);
  if (!context) {
    throw new Error('useUP must be used within a UPProvider');
  }
  return context;
} 