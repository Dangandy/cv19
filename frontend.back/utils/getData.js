// imports
import { useState, useEffect } from "react";

export default function getHistory(country) {
  const [history, setHistory] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      const data = await fetch(`localhost:5000/plot/{country}`)
        .then((res) => {
          res.json();
        })
        .catch((error) => {
          setError(error);
        });
      setHistory(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return {
    history,
    loading,
    error,
  };
}
