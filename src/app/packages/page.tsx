import Image from 'next/image';
import Button from '@/components/Button';

export default function Packages() {
  return (
    <div className="container section pt-safe text-center">
      <h1 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>Packages</h1>
      
      <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '400px', margin: '0 auto 3rem auto', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}>
        <Image src="/packages_image_1779046826154.png" alt="Golf Simulator Packages" fill style={{ objectFit: 'cover' }} />
      </div>

      <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#f8fafc' }}>
        Summer Packages coming soon!
      </p>
      <Button href="https://yourgolfbooking.com/venues/the-bunker-2/memberships" target="_blank" rel="noopener noreferrer">
        Buy Now
      </Button>
    </div>
  );
}
