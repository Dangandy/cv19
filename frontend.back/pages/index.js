import { createGlobalStyle } from "styled-components";
import useStats from "../utils/useStats";
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";
// import Plot from "../components/Plot";
import BarChart from "../components/Model";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <BarChart />
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}
