import { createContext } from 'react';
import { ConnectivityState } from './ConnectivityState';

type IConnectivityContext = {
  state: ConnectivityState;
  setIsConnected: (isConnected: boolean) => void;
};

export const ConnectivityContext = createContext<IConnectivityContext | null>(null);
