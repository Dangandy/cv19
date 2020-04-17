// imports
import React from "react";
import styled from "styled-components";

// sytles
const Head = styled.h1`
  background-color: snow;
  width: 6em;
  height: 7em;
  border-radius: 50%;
  text-align: center;
  align-items: center;
`;

const Text = styled.h1`
  text-align: center;
  display: inline-block;
`;
// component
export default function Header() {
  return (
    <Head>
      <Text>cv19</Text>
    </Head>
  );
}
