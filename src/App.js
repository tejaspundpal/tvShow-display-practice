import { Outlet,createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Error from './components/Error';
import ShowInfo from './components/ShowInfo';

function AppLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
}

const App = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/show/:id',
        element: <ShowInfo />,
      },
    ],
  },
]);

export default App;
