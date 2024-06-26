import { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import ErrorComp from "./components/ErrorComp";
import StarRating from "./StarRating";
import { useLocalStorageState } from "./customHooks/useLocalStorageState";
import { useKey } from "./customHooks/useKey";
import { useMoviesFetch } from "./customHooks/useMoviesFetch";
import { URL } from "./constants";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const [watched, setWatched] = useLocalStorageState("watched");

  const [movies, loading, error] = useMoviesFetch(query);

  const handleSelectMovie = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((prev) => [...prev, movie]);
  };

  const handleDeleteWatchedMovie = (id) => {
    setWatched((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  return (
    <>
      <NavBar>
        <Logo />
        <Input query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {loading && <Loader />}
          {!loading && !error && (
            <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorComp message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddMovie={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDelete={handleDeleteWatchedMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

const NavBar = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
};

const Input = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  // useEffect(() => {
  //   const callback = (e) => {
  //   if (e.code === "Enter") {
  //     if (document.activeElement === inputEl.current) return;
  //     inputEl.current.focus();
  //     setQuery("");
  //   }
  // };
  //   document.addEventListener("keydown", callback);

  //   return () => document.removeEventListener("keydown", callback);
  // }, [setQuery]);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

const NumResults = ({ movies = [] }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

/*
const WatchedBox = () => {

  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />

          <WatchedMoviesList watched={watched} />
        </>
      )}
    </div>
  );
};
*/

const MoviesList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-watched">
      {movies?.map((movie) => (
        <MoviesListItem
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
};

const MoviesListItem = ({ movie, onSelectMovie }) => {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

const MovieDetails = ({ selectedId, onCloseMovie, onAddMovie, watched }) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    imdbID,
  } = movie;

  useEffect(() => {
    if (!movie) return;
    document.title = `Movie | ${title}`;

    return () => (document.title = "usePopCorn App");
  }, [title, movie]);

  // useEffect(() => {
  //   const callback = (e) => {
  //     if (e.code === "Escape") {
  //       onCloseMovie();
  //     }
  //   };

  //   document.addEventListener("keydown", callback);

  //   return () => {
  //     document.removeEventListener("keydown", callback);
  //   };
  // }, [onCloseMovie]);

  useKey("Escape", onCloseMovie);

  const isWatched = watched?.map((movie) => movie.imdbID)?.includes(selectedId);
  // const watchedUserRating = watched.filter((movie) => movie.imdbID === imdbID);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  // console.log("Have is seen the movie ?", isWatched);

  const handleAddWatchedMovie = () => {
    const newMovie = {
      imdbID,
      title,
      year,
      poster,
      runtime: Number(runtime.split(" ")[0]),
      imdbRating,
      userRating,
    };
    onAddMovie(newMovie);
    onCloseMovie();
  };

  // console.table([
  //   title,
  //   year,
  //   poster,
  //   runtime,
  //   imdbRating,
  //   plot,
  //   released,
  //   actors,
  //   director,
  //   genre,
  //   userRating,
  // ]);

  useEffect(() => {
    const getSelectedMovieDetails = async (selectedId) => {
      setLoading(true);
      const res = await fetch(`${URL}i=${selectedId}`);
      const data = await res.json();
      // console.log(data);
      setMovie(data);
      setLoading(false);
    };
    getSelectedMovieDetails(selectedId);
  }, [selectedId]);

  return (
    <div className="details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie.`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> {imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {isWatched ? (
                <p>You have already rated this movie {watchedUserRating}⭐</p>
              ) : (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    setOutRating={setUserRating}
                  />
                  {userRating && (
                    <button className="btn-add" onClick={handleAddWatchedMovie}>
                      + Add to list
                    </button>
                  )}
                </>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>
              Starring <strong>{actors}</strong>
            </p>
            <p>
              Directed by <strong>{director}</strong>
            </p>
          </section>
        </>
      )}
    </div>
  );
};

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
};

const WatchedMoviesList = ({ watched, onDelete }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMoviesListItem
          movie={movie}
          key={movie.imdbID}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

const WatchedMoviesListItem = ({ movie, onDelete }) => {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <button className="btn-delete" onClick={() => onDelete(movie.imdbID)}>
        X
      </button>

      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
};
