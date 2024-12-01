// Home.tsx
import { useHome } from './useHome';
import Head from "next/head";
import styles from "./Home.module.scss";
import type { NextPage } from "next";
import { BlockfrostProvider } from "@meshsdk/core";

const blockchainProvider = new BlockfrostProvider(
  "preprod4eC1bMDlOtVNOxGaMuauOiR8AlbbfR3x"
);


export default function Home() {
  const { } = useHome();


  async function getDataDreps() {
    const result = await blockchainProvider.get("/governance/dreps");

    console.log(result);
  }

  async function getDataProposals() {
    const result = await blockchainProvider.get("/governance/proposals");

    console.log(result);
  }

  return (
    <>
      <Head>
        <title>Governance DApp | Home</title>
        <meta name="description" content="Governance DApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <h1>Welcome to Governance DApp</h1>
        <div>
          <button onClick={getDataDreps}>Get Data dreps</button>
        </div>
        <div>
          <button onClick={getDataProposals}>Get Data Proposals</button>
        </div>
      </div>
    </>
  );
}

