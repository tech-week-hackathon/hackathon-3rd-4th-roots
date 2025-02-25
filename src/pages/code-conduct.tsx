import type { NextPage } from 'next'; 
// Importing the `NextPage` type from Next.js to define the type of this component as a page in the application.

import styles from './index.module.scss'; 
// Importing SCSS module for styling. The styles defined here can be applied to elements in this file.

import CodeConduct from '../components/public/CodeConduct/CodeConduct'; 
// Importing the `Home` component from its path. This component will render the main content for the homepage.

const CodeConductPage: NextPage = () => { 
    // Defining the `HomePage` functional component and typing it as a `NextPage`. 
    // This indicates it's part of the Next.js routing system.

    return (
        <>
            <main>
                {/* Wrapping the `Home` component inside a `<main>` element for semantic HTML structure. */}
                <CodeConduct />
            </main>
        </>
    );
};

export default CodeConductPage; 
// Exporting the `HomePage` component as the default export for this file.
// This allows Next.js to recognize it as the route for the homepage ("/").

