export default function ContactUs() {
  return (
    <div className="container section">
      <h1 className="text-center" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>Contact Us</h1>
      
      <div className="card text-center mb-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#f8fafc' }}>
          For all questions or concerns please reach out to:
        </p>
        <div style={{ fontSize: '1.2rem', lineHeight: '2' }}>
          <p>
            <strong>Email:</strong> <br/>
            <a href="mailto:thebunkergolfsim@yahoo.com" style={{ color: 'var(--accent)' }}>thebunkergolfsim@yahoo.com</a>
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Telephone:</strong> <br/>
            (248) 500-4517
          </p>
        </div>
      </div>

      <h2 className="text-center" style={{ marginBottom: '2rem', marginTop: '2rem' }}>Our Locations</h2>
      
      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        <div>
          <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Bloomfield Township</h3>
          <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>43207 Woodward Avenue, Bloomfield Township, MI 48302</p>
          <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.632622323456!2d-83.2680825!3d42.6055375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824bf41a192c38d%3A0x11cff2d96a61b96a!2s43207%20Woodward%20Ave%2C%20Bloomfield%20Township%2C%20MI%2048302%2C%20USA!5e0!3m2!1sen!2sin!4v1779045340584!5m2!1sen!2sin" 
              width="100%" 
              height="350" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div>
          <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Lake Orion</h3>
          <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>784 S Lapeer Rd, Lake Orion, MI</p>
          <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.7911929166025!2d-83.2420486251128!3d42.77162110900293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ecdaacc07213%3A0x17f9e0155f94254a!2s784%20S%20Lapeer%20Rd%2C%20Orion%20Township%2C%20MI%2048362%2C%20USA!5e0!3m2!1sen!2sin!4v1779045648211!5m2!1sen!2sin" 
              width="100%" 
              height="350" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
