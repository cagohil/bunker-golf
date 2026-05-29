import Image from 'next/image';

export default function Leagues() {
  return (
    <div className="container section pt-safe">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>Leagues</h1>

        <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}>
          <Image src="/leagues-img-1.jpeg" alt="Indoor Golf Leagues" fill style={{ objectFit: 'cover' }} />
        </div>

        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#f8fafc' }}>
          Join a Golf League at The Bunker
        </h2>

        <div style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '3rem', color: '#cbd5e1' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Looking for a fun and competitive way to keep your game sharp year-round? Join one of our indoor golf leagues at The Bunker! We can host leagues of up to 18 players, with 6 players per bay.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Whether you’re organizing a company outing, a weekly friends league, or a seasonal competition, we’ll handle the setup so you can focus on having fun.
          </p>

          <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}>
            <Image src="/leagues-img-2.jpeg" alt="Indoor Golf Leagues" fill style={{ objectFit: 'cover' }} />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            Choose from a variety of world-class courses, track your stats, and compete in a relaxed, social environment. Leagues can be customized for individual or team play, with flexible scheduling to fit your group’s needs.
          </p>
          <p style={{ color: 'var(--foreground)', fontWeight: '600' }}>
            Ready to start your league? Contact us to reserve your spot and make The Bunker your home for indoor golf competition.
          </p>
        </div>

        <div className="card" style={{ display: 'inline-block', textAlign: 'left', width: '100%', maxWidth: '500px' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>
            <strong>Email:</strong> <a href="mailto:thebunkergolfsim@yahoo.com" style={{ color: 'var(--accent)' }}>thebunkergolfsim@yahoo.com</a>
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            <strong>Telephone:</strong> (248) 500-4517
          </p>
        </div>
      </div>
    </div>
  );
}
