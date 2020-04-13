import { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("USA");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  if (countries)
    return (
      <div>
        <h2>Currently Showing {selectedCountry}</h2>
        <select
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
        >
          {Object.entries(countries.countries).map(
            ([_, { name: country, iso3: code }]) => (
              <option
                selected={selectedCountry === code}
                key={code}
                value={code}
              >
                {country}
              </option>
            )
          )}
        </select>
        <Stats
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        ></Stats>
      </div>
    );
}
