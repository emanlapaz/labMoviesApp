import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState([])
  const [playlists, setPlaylists] = useState([]);

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  const addToPlaylists = (movie) => {
    let updatedPlaylists = [...playlists];
    if (!playlists.includes(movie.id)) {
      updatedPlaylists.push(movie.id);
    }
    setPlaylists(updatedPlaylists);
    console.log("Added to playlist:", movie.title);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {   // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        playlists,
        addToFavourites,
        addToPlaylists,
        removeFromFavourites,
        addReview,    // NEW
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
