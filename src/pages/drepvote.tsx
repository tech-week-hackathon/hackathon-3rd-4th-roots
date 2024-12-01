import type { NextPage } from 'next';
import styles from './index.module.scss';
import dRepVote from '../components/public/dRepVote/dRepVote';

const dRepVotePage: NextPage = () => {
    return (
        <>
            <main >
                <dRepVote />
            </main>
        </>
    );
};

export default dRepVotePage;
