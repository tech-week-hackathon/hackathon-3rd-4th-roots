import type { NextPage } from 'next';
import styles from './index.module.scss';
import member from '../components/public/member/member';

const memberPage: NextPage = () => {
    return (
        <>
            <main >
                <member />
            </main>
        </>
    );
};

export default memberPage;
