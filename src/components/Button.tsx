import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({ href, children, variant = 'primary', className = '', target, rel }: ButtonProps) {
  const btnClass = `${styles.button} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={btnClass} target={target} rel={rel}>
        {children}
      </Link>
    );
  }
  return <button className={btnClass}>{children}</button>;
}
