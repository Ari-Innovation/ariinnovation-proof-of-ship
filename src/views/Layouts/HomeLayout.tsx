import { shortenAddress } from 'thirdweb/utils';
import { useActiveAccount } from 'thirdweb/react';
import { AuthLayout } from './AuthLayout';

export function HomeLayout() {
  const activeAccount = useActiveAccount();

  if (activeAccount?.address) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-2">
        <div className="mb-8 flex flex-col items-center gap-4">
          <h1 className="base-content text-2xl font-bold">Welcome to your Aria Health Dashboard</h1>
          <p className="base-content">
            Your wallet address is <span className="text-primary">{activeAccount.address}</span>
          </p>
          <p>
            <span className="base-content">Or </span>
            <span className="text-primary">{shortenAddress(activeAccount.address)}</span>
            <span className="base-content"> for short</span>
          </p>
        </div>
      </div>
    );
  }

  return <AuthLayout />;
}
