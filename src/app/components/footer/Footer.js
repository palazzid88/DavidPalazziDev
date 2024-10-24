import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p className={styles.footerCopyright}>
            &copy; David Ezequiél Palazzi. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="https://wa.me/543364309084" target="_blank">
              <Image
                src="/images/wtp.png"
                alt="WhatsApp"
                width={32}
                height={32}
                className={styles.footerIcon}
              />
            </Link>
          </div>
        </div>
        <p className={styles.footerText}>palazzidavid88@gmail.com</p>
        <p className={styles.footerNote}>
          Esta landing page fue desarrollada con JavaScript dentro del entorno de trabajo de Next.js
        </p>
        <p className={styles.footerText}>Desarrollador FullStack MERN.</p>
      </footer>
    );
}
