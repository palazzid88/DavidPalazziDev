'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dev = "dev = () => "

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarInfo}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Profile Image"
              width={60}
              height={60}
            />
          </Link>
          <div className={styles.navbarDiv}>
            <div className={styles.navbarTitle}>
              <span className={styles.codeSnippet}>const</span> {dev} <span className={styles.name}> David Palazzi</span>;
            </div>
            <div className={styles.navbarMenu}>
              <ul className={styles.navLinks}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/contact">Contacto</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
