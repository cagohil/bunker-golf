import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brand}>
          <Image src="/trackman-footer-logo-two.png" alt="The Bunker Golf Sim" width={250} height={150} style={{ objectFit: 'contain' }} />
          <p className={styles.tagline}>The Ultimate Indoor Golf Experience.</p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
            <a href="https://www.facebook.com/people/The-Bunker-Golf-Sim/61578294387830/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/bunkergolfsim/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/packages">Packages</Link></li>
            <li><Link href="/leagues">Leagues</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:thebunkergolfsim@yahoo.com">thebunkergolfsim@yahoo.com</a></p>
          <p>Phone: (248) 500-4517</p>
          <p>Open 24 Hours, 7 Days a Week</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} The Bunker Golf Sim. All rights reserved.</p>
      </div>
    </footer>
  );
}
