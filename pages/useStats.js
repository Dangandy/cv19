import { useEffect, useState } from "react";

export default function useStats() {
  const [stats, setStats] = useState();

  useEffect(() => {
    async function fetchData() {
      console.log("fetching");
      const data = await fetch("https://covid19.mathdro.id/api").then((res) =>
        res.json()
      );
      setStats(data);
    }
    fetchData();
  }, []);
  return stats;
}
