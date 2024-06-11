import { useEffect, useState } from "react";

export function useLocalStorageState(key) {
  const existingWatchedMovies = () => {
    const retreivedMovies = JSON.parse(localStorage.getItem(key));
    return retreivedMovies ? retreivedMovies : [];
  };

  const [value, setValue] = useState(existingWatchedMovies);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
