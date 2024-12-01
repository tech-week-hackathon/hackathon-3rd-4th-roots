import type { NextPage } from 'next';
import styles from './index.module.scss';
import currentParameters from '../components/public/currentParameters/currentParameters';

const currentParametersPage: NextPage = () => {
    return (
        <>
            <main >
                <currentParameters />
            </main>
        </>
    );
};

export default currentParametersPage;
