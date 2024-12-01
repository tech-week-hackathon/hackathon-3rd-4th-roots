import { LOGO } from "@/utils/images";
import styles from "./Header.module.scss";
import Image from "next/image";
import { CardanoWallet, useWallet } from "@meshsdk/react";
import Link from "next/link";
import { useState } from "react";
import ModalCandidate from "../../Commons/ModalCandidate/ModalCandidate";

export default function Header() {
  const { connected, wallet } = useWallet();

  const [isTxModalOpen, setIsTxModalOpen] = useState(false); // State for showing transaction modal
  return (
    <>
      <section className={styles.header}>
        <div className={styles.navSection}>
          <Link className={styles.navLogo} href="/">
            <div className={styles.logo}>
              <Image
                src={LOGO}
                alt="Logo"
                width={80}
                height={80}
                layout="fixed"
              />
            </div>
          </Link>
          <div className={styles.nav}>
            <button
              className={styles.invalidButton}
              onClick={() => {
                if (connected === true) {
                  setIsTxModalOpen(true);
                }
              }}
            >
              Be candidate
            </button>
            <Link href="/code-conduct">Code Conduct</Link>
            <Link href="/constitution">Constitution</Link>
            <Link href="/candidature">Candidature</Link>
          </div>
        </div>

        <div className={styles.btnActions}>
          <CardanoWallet />
        </div>
      </section>
      <ModalCandidate
        isOpen={isTxModalOpen}
        onRequestClose={() => setIsTxModalOpen(false)}
      />
    </>
  );
}
