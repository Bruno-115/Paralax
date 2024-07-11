import { RouterProvider, createBrowserRouter  } from 'react-router-dom';

import MainPage from './MainPage/_Main';
import Register from './Register';
import RootLayout from './Root';
import Login from './Login';
const router = createBrowserRouter([
  {
    path: '/Paralax/',
    element: <RootLayout/>,
    errorElement: null,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/Paralax/cadastro',
        element: <Register />,
      },
      {
        path: '/Paralax/login',
        element: <Login />,
      }
    ],
  },
]);

function App() {
  return  <RouterProvider router={router} />;
}

export default App;