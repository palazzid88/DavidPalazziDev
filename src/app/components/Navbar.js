import Image from 'next/image';
import Link from 'next/link';
import styles from './components.module.css'

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbarComponents}>
        <img
          src="images/logo.png"
          alt="Profile Image"
          className="profile-image"
          />
        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '0 15px' }}>
            <Link href="/">Home</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link href="/contact">Contact</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
