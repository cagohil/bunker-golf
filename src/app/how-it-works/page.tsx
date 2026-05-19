import Image from 'next/image';

export default function HowItWorks() {
  return (
    <div className="container section pt-safe">
      <h1 className="text-center" style={{ color: 'var(--accent)', marginBottom: '3rem' }}>How It Works</h1>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '4rem' }}>
          We’ve designed the space to be simple, convenient, and completely self-service so you can enjoy your round of golf without interruptions. Please read through the steps below before your visit.
        </p>

        <div className="card mb-lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            <h2 style={{ color: 'var(--foreground)' }}>1. Booking Your Tee Time</h2>
            <div style={{ flex: '1 1 300px' }}>
              <p>All reservations are made online through our booking system.</p>
              <p>Once your booking is confirmed, you’ll receive 2 codes via email confirmation:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
                <li>The Openpath code will unlock the facility door at your scheduled time.</li>
                <li>The Trackman code will unlock your reserved simulator bay for play.</li>
              </ul>
              <p>✅ Please arrive on time for your reservation. (The door code will work 15 minutes prior to your scheduled time)</p>
              <p>✅ When your session ends, the code will automatically expire.</p>
            </div>
            <div style={{ flex: '1 1 250px', position: 'relative', height: '300px', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <Image src="/booking_online_1779046542059.png" alt="Booking Online" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div className="card mb-lg">
          <h2 style={{ color: 'var(--foreground)' }}>2. No On-Site Staff</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 250px', position: 'relative', height: '300px', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <Image src="/facility_entrance_1779046620335.png" alt="Facility Entrance" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <p>Our facility is fully automated and operates WITHOUT on-site employees. Because of this, everything—from booking to access—is managed remotely.</p>
              <p>If you need assistance, support is available via phone, email, or text during operating hours.</p>
              <p>The Bunker does not offer food/beverage for purchase but encourages you to bring your own or order from one of our nearby neighbors. Just be sure to clean up after yourself to ensure a clean atmosphere for others!</p>
            </div>
          </div>
        </div>

        <div className="card mb-lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            <h2 style={{ color: 'var(--foreground)' }}>3. Using the TrackMan Simulator</h2>
            <div style={{ flex: '1 1 300px' }}>
              <p>We use TrackMan, the gold standard in golf simulator technology, for accurate ball tracking, stats, and an immersive golf experience.</p>
              <p>Download the TrackMan Golf App (available on iOS and Android) <a href="https://www.trackman.com/login" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Download Here</a>.</p>
              <p>Create a free TrackMan profile before your visit for the best experience. By logging in, you’ll be able to:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
                <li>Save your stats and session history</li>
                <li>Compete with friends</li>
                <li>Track progress over time</li>
              </ul>
              <p>💡 Tip: Setting up your profile in advance will make check-in and play smooth and easy.</p>
              <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#94a3b8' }}>*We do not have rental clubs. All guests are responsible for bringing their own clubs.</p>
            </div>
            <div style={{ flex: '1 1 250px', position: 'relative', height: '350px', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <Image src="/simulator_bay_1779046651975.png" alt="Simulator Bay" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
