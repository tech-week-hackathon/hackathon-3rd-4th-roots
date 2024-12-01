import { LOGO } from '@/utils/images';
import styles from './Header.module.scss';
import Image from 'next/image';
import { CardanoWallet } from "@meshsdk/react";
import Link from 'next/link';
import { useState } from 'react';
import ModalCandidate from '../../Commons/ModalCandidate/ModalCandidate';

export default function Header() {

  const [isTxModalOpen, setIsTxModalOpen] = useState(false); // State for showing transaction modal
  return (
    <section className={styles.header}>
      <div className={styles.navSection}>
        <Link className={styles.navLogo} href="/">
          <div className={styles.logo}><Image src={LOGO} alt="Logo" width={80} height={80} layout="fixed" /></div>

        </Link>
        {/*         <div className={styles.nav}>
          <Link href="/">Committees</Link>
          <Link href="/">Drep Directory</Link>
          <Link href="/">Proposals</Link>
        </div> */}
      </div>
      <button className={styles.invalidButton} onClick={() => setIsTxModalOpen(true)}>
        Be candidate
      </button>
      <ModalCandidate
        isOpen={isTxModalOpen}
        onRequestClose={() => setIsTxModalOpen(false)}
      />

      <div className={styles.btnActions}>
        <CardanoWallet />
      </div>
    </section>
  )
}
