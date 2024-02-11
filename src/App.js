import { Outlet, Provider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Error from './components/Error';
import ShowInfo from './components/ShowInfo';
import { useEffect, useState } from 'react';

function AppLayout() {
  const [movieList, setMovieList] = useState([]); 
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all'); 
        const data = await response.json();
        setMovieList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Outlet tvShows={movieList} searchText={searchText} />
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
