import { useState, useEffect } from "react";

// utils
export default function getHistory(country) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [history, setHistory] = useState();
  useEffect(() => {
    async function fetchHistory() {
      setLoading(true);
      setError();
      console.log("fetching history");
      const history = await fetch(`http://localhost:5000/plot/${country}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => setError(err));
    }
    fetchHistory();
  }, [country]);
  return {
    history,
    loading,
    error,
  };
}
