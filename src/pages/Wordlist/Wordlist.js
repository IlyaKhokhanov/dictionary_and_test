import React from "react";
import { Header } from "../../components/Header";
import { WordlistTable } from "../../components/WordlistTable";

export function Wordlist() {
  return (
    <>
      <Header className='wordlist'>Wordlist</Header>
      <WordlistTable />
    </>
  );
}
