import type { NextPage } from 'next';
import styles from './index.module.scss';
import votes from '../components/public/votes/votes';

const votesPage: NextPage = () => {
    return (
        <>
            <main >
                <votes />
            </main>
        </>
    );
};

export default votesPage;
