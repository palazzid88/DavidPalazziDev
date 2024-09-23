// src/app/components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
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
    </nav>
  );
}
