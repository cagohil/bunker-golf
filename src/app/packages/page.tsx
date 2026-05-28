import Image from 'next/image';
import Button from '@/components/Button';

export default function Packages() {
  return (
    <div className="container section pt-safe text-center">
      <h1 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>Packages</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#f8fafc' }}>
        Summer Packages coming soon!
      </p>
      <Button href="https://yourgolfbooking.com/venues/the-bunker-2/memberships" target="_blank" rel="noopener noreferrer">
        Buy Now
      </Button>
    </div>
  );
}
