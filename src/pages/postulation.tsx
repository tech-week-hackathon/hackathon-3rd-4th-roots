import type { NextPage } from 'next';
import styles from './index.module.scss';
import postulation from '../components/public/postulation/postulation';

const postulationPage: NextPage = () => {
    return (
        <>
            <main >
                <postulation />
            </main>
        </>
    );
};

export default postulationPage;
