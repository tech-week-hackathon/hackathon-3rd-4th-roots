import type { NextPage } from 'next';
import styles from './index.module.scss';
import committee from '../components/public/committee/committee';

const committeePage: NextPage = () => {
    return (
        <>
            <main >
                <committee />
            </main>
        </>
    );
};

export default committeePage;
