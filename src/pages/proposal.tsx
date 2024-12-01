import type { NextPage } from 'next';
import styles from './index.module.scss';
import proposal from '../components/public/proposal/proposal';

const proposalPage: NextPage = () => {
    return (
        <>
            <main >
                <proposal />
            </main>
        </>
    );
};

export default proposalPage;
