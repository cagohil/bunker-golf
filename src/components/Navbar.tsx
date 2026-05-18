'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Packages', path: '/packages' },
    { name: 'Leagues', path: '/leagues' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.svg" alt="The Bunker Golf Sim" width={200} height={120} style={{ objectFit: 'contain' }} />
        </Link>

        <div className={styles.desktopMenu}>
          {links.map(link => (
            <Link
              key={link.path}
              href={link.path}
              className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          {links.map(link => (
            <Link
              key={link.path}
              href={link.path}
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
