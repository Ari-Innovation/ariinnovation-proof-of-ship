import { ReactNode, useCallback, useReducer, useEffect } from 'react';
import { ConnectivityReducer } from './ConnectivityReducer';
import { CONNECTIVITY_INITIAL_STATE } from './ConnectivityState';
import { ConnectivityContext } from './ConnectivityContext';

export default function ConnectivityProvider({ children }: { children: ReactNode }) {
  const [connectivityState, dispatch] = useReducer(ConnectivityReducer, CONNECTIVITY_INITIAL_STATE);

  const setIsConnected = useCallback((isConnected: boolean) => {
    dispatch({
      type: 'setIsConnected',
      payload: isConnected,
    });
  }, []);

  useEffect(() => {
    const handleStatusChange = () => {
      if (!navigator.onLine) {
        // TODO: Show a toast or a modal to inform the user
        console.warn('No internet connection');
      } else {
        // TODO: Show a toast or a modal to inform the user
        console.info('Internet connection is restored');
      }
      setIsConnected(navigator.onLine);
    };

    // Add event listeners for online and offline events
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [setIsConnected]);

  return (
    <ConnectivityContext.Provider
      value={{
        state: connectivityState,
        setIsConnected,
      }}>
      {children}
    </ConnectivityContext.Provider>
  );
}
