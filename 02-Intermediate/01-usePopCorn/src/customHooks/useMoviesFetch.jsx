import { useEffect, useState } from "react";
import { URL } from "../constants";

export function useMoviesFetch(searchQuery) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`${URL}s=${searchQuery}`, {
          signal: controller.signal,
        });

        if (!res.ok)
          throw new Error("Something went wrong while fetching Movies Data");
        const data = await res.json();

        if (data.Response === "False")
          throw new Error("Movies Not Found with this query");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        console.error(err.message);

        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  return [movies, loading, error];
}
