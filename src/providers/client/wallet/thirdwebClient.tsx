import { createThirdwebClient } from 'thirdweb';

const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID;

if (!clientId) {
  console.error('VITE_THIRDWEB_CLIENT_ID environment variable is not set');
}

const thirdwebClient = createThirdwebClient({
  clientId,
});

export default thirdwebClient;
