import { LOGO } from '@/utils/images';
import styles from './Header.module.scss';
import Image from 'next/image';
import { CardanoWallet } from "@meshsdk/react";
import Link from 'next/link';

export default function Header() {

  return (
    <section className={styles.header}>
      <div className={styles.navSection}>
        <Link className={styles.logo} href="/">
          <Image src={LOGO} alt="Logo" width={80} height={80} />
        </Link>
        <div className={styles.nav}>
          <Link href="/">Dashboard</Link>
          <Link href="/">Drep Directory</Link>
          <Link href="/">Committees</Link>
          <Link href="/">Proposals</Link>
        </div>
      </div>

      <div className={styles.btnActions}>
            <CardanoWallet />
          </div>
    </section>
  )
}
