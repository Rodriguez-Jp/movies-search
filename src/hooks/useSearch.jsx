import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = query === "";
      return;
    }

    if (query.trim() === "") {
      setError("You can't search an empty movie");
      return;
    }
    if (query.length < 3) {
      setError("Movie name should have more than 3 characters");
      return;
    }

    setError(null);
  }, [query]);

  return { query, setQuery, error };
}
