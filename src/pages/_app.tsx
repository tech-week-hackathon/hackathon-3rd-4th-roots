
import { StoreProvider } from 'easy-peasy';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { AppGeneral, CS, globalStore } from 'smart-db';
import Layout from '../components/UI/Layout/Layout';
import 'smart-db/dist/styles.css';
// import { Address, MintingPolicy, SpendingValidator } from 'lucid-cardano';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import '../../styles/globals.scss';
import "@meshsdk/react/styles.css";
import { MeshProvider } from "@meshsdk/react";
import Header from "@/components/layouts/Header/Header";

// import {mintingPolicyIDPreScript, validatorScript } from '../lib/Commons/Constants/onchain';

// // Define the shape of the application state.
export type AppState = {
  //     // Global state variables
  //     validatorScript: SpendingValidator; // The script for the market validator.
  //     validatorAddress?: Address; // The address of the market (optional).
  //     mintingPolicyIDPreScript: MintingPolicy; // The pre-script for minting policy.
  //     mintingPolicyIDScript?: MintingPolicy; // The script for minting policy (optional).
  //     mintingPolicyID_CS?: CS; // The asset class of the minting policy (optional).
};

// // Initial state for the app, with default values.
const initialAppState: AppState = {
  //     validatorScript: validatorScript,
  //     mintingPolicyIDPreScript: mintingPolicyIDPreScript 
};

// Create a context for managing the app state globally.
export const AppStateContext = createContext<{
  appState: AppState;
  setAppState: Dispatch<SetStateAction<AppState>>; // Function to update the app state.
}>({ appState: initialAppState, setAppState: () => { } });

export default function MyApp({ Component, pageProps }: AppProps<{ session?: Session }>) {
  // Use the useState hook to manage the app state locally within the component.
  const [appState, setAppState] = useState<AppState>(initialAppState);

  return (
    // Provide the app state and setter function to the entire app via context.
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {/* Provide session management using next-auth */}
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        {/* Provide the global store from SmartDB for state management */}
        <StoreProvider store={globalStore}>
          <MeshProvider>
            {/* Run the general app component from SmartDB for init procedures */}
            <AppGeneral />
            {/* Include the React Notifications component for global notifications */}
            <ReactNotifications />
            {/* Wrap the app content with the Layout component */}
            <Layout>
              {/* Render the current page component */}
              <Header />
              <Component {...pageProps} />
            </Layout>
          </MeshProvider>
        </StoreProvider>
      </SessionProvider>
    </AppStateContext.Provider>
  );
}

