import thirdwebClient from '../../providers/client/wallet/thirdwebClient';
import { ConnectEmbed, useIsAutoConnecting } from 'thirdweb/react';
import { celo } from 'thirdweb/chains';

export function AuthLayout() {
  const isAutoConnecting = useIsAutoConnecting();

  if (isAutoConnecting) {
    console.log('isAutoConnecting', isAutoConnecting);
    return (
      <div className="flex h-full flex-col items-center justify-center p-2">
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="h-24 w-24 animate-pulse rounded-full bg-gray-200" />
          <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="h-96 w-96 animate-pulse rounded-lg bg-gray-200" />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center p-2">
      <div className="mb-8 flex flex-col items-center gap-4">
        <img src="/src/assets/logo.svg" alt="Ari Health Logo" className="h-24 w-24" />
        <h1 className="text-2xl font-bold">Login or Create an Account</h1>
      </div>
      <ConnectEmbed
        appMetadata={{
          name: 'Ari Health',
          description: 'Ari Health',
          logoUrl: '/src/assets/logo.svg',
        }}
        chain={celo}
        chains={[celo]}
        header={{
          title: 'Ari Health',
          titleIcon: '/src/assets/logo.svg',
        }}
        modalSize="compact"
        theme="light"
        client={thirdwebClient}
        autoConnect={true}
        requireApproval={true}
        welcomeScreen={{
          title: 'Ari Health',
          subtitle: 'Login or Create your account',
          img: {
            src: '/src/assets/logo.svg',
          },
        }}
      />
    </div>
  );
}
