import { useState, useEffect } from "react";

function getStats() {
  const [history, setHistory] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect() => {}
  return { history, loading, error };
}

export default function Model() {
  const { history, loading, error } = useStats();
  return null;
}
