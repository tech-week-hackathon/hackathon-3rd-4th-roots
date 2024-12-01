import type { NextPage } from 'next';
import styles from './index.module.scss';
import stakePoolVote from '../components/public/stakePoolVote/stakePoolVote';

const stakePoolVotePage: NextPage = () => {
    return (
        <>
            <main >
                <stakePoolVote />
            </main>
        </>
    );
};

export default stakePoolVotePage;
