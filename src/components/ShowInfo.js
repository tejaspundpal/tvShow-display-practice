import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieList from '../utils/useMovieList';

const ShowInfo = () => {
  const { id } = useParams();
  const movieList = useMovieList();

  const showsArray = Object.values(movieList);
  const showList = showsArray.find((showList) => showList.show.id === parseInt(id, 10));

  if (!showList) {
    return <p>Show not found</p>;
  }

  const { name, summary } = showList.show;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4 text-center">
            <h2 className="card-title">{name}</h2>
            <p className="card-text" style={{textAlign:'justify'}}>{summary}</p>
            <div className="mt-3">
              <span role="img" aria-label="Star Emoji" style={{ fontSize: '2rem' }}>
                ⭐️
              </span>
              <span className="mx-2" role="img" aria-label="Popcorn Emoji" style={{ fontSize: '2rem' }}>
                🍿
              </span>
              <span role="img" aria-label="Ticket Emoji" style={{ fontSize: '2rem' }}>
                🎟️
              </span>
            </div>
            <div className="mt-4">
              <button className="btn btn-primary">Book Show</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
