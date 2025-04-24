/* eslint-disable react-refresh/only-export-components */
import { ConnectivityState } from './ConnectivityState';
import { ConnectivityActions } from './ConnectivityActions';

export function ConnectivityReducer(state: ConnectivityState, action: ConnectivityActions): ConnectivityState {
  switch (action.type) {
    case 'setIsConnected':
      return { ...state, isConnected: action.payload };
    default:
      return state;
  }
}
