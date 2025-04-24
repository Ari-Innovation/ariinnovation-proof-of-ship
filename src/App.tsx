import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomeLayout } from './views/Layouts/HomeLayout';
import { WalletLayout } from './views/Layouts/WalletLayout';
import { ProfileLayout } from './views/Layouts/ProfileLayout';
import { LayoutProvider } from './views/Layouts/LayoutProvider';

const NoMatch = () => <h1>404 - Not Found</h1>;

const router = createBrowserRouter([
  {
    element: <LayoutProvider />,
    children: [
      { path: '/', element: <HomeLayout /> },
      { path: '/wallet', element: <WalletLayout /> },
      { path: '/profile', element: <ProfileLayout /> },
      { path: '*', element: <NoMatch /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
