import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const heroImages = [
  '/images/IMG_1532.jpeg',
  '/images/IMG_1530.jpeg',
  '/images/IMG_1524.jpeg',
  '/images/IMG_1537.jpeg',
  '/images/IMG_1527.jpeg',
  '/images/IMG_1535.jpeg',
  '/images/IMG_1531.jpeg',
  '/images/IMG_1540.jpeg',
  '/images/IMG_1538.jpeg',
  '/images/IMG_1539.jpeg'
];

const services = [
 [ 'Asphalt Works', 'Potholes, patches, driveways, car parks, subdivisions, roads and commercial asphalt works.' ],
  [ 'Crew Hire', 'Experienced asphalt crews for day works, night works and major project support.' ],
  [ 'Labour Hire', 'Skilled asphalt labourers, operators, supervisors, foremen and all-rounders.' ],
  [ 'Civil Prep', 'Prep works, remedial works, reinstatement, trimming and maintenance support.' ],
  [ 'Line Marking & Spray Seal', 'Line marking, spray seal and additional asphalt support services.' ]
];

const directors = [
  {
    name: 'Michael Folefau',
    title: 'Director / Operations & Client Services',
    email: 'Michael@Morrisandsonsgroup.com.au',
    phone: '0428 041 410',
    tel: '0428041410'
  },
  {
    name: 'Malo Folefau',
    title: 'Director / Commercial & Project Delivery',
    email: 'Malo@Morrisandsonsgroup.com.au',
    phone: '0477 013 306',
    tel: '0477013306'
  },
  {
    name: 'Bjorn Folefau',
    title: 'Director / Compliance & WHS',
    email: 'Bjorn@Morrisandsonsgroup.com.au',
    phone: '0435 950 661',
    tel: '0435950661'
  }
];

function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <header className="site-header">
        <nav className="left-nav">
          <a href="#services">Services</a> 
          <a href="#about">About</a> 
          <a href="#contact">Contact</a>
         </nav>
       
       <a 
         href="#home" 
         className="brand center-brand" 
         aria-label="Morris & Sons Group home"
        > 
         <img src="/images/logo.png" alt="Morris & Sons Group" />
         </a>
          
        <a className="quote-button" href="#contact">
          Request a Quote
          </a>
      </header>

     <section id="home" className="hero">
  {heroImages.map((image, index) => (
    <div
      key={image}
      className={`hero-slide ${index === current ? 'active' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    />
  ))}

  <div className="hero-overlay" />
  <div className="hero-glow" />

  <div className="hero-content">
    <img className="hero-logo" src="/images/logo.png" alt="Morris & Sons Group" />

    <div className="social-links">
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
    </div>
  </div>

  <a href="#services" className="scroll-down" aria-label="Scroll to services">
    ⌄
  </a>
</section>
        <section id="services" className="section dark-section">
        <div className="section-heading center">
          <p>Our Services</p>
          <h1>Complete asphalt & civil solutions</h1>
        </div>
        <div className="service-grid">
  {services.map(([title, text], index) => (
    <article className="service-card" key={title}>
      <div
        className="service-image"
       style={{
  backgroundImage:
    title === 'Crew Hire'
      ? "url('/images/crew hire.png')"
      : `url(${heroImages[index % heroImages.length]})`
}} 
      >
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="service-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  ))}
</div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-logo-panel">
          <img src="/images/logo.png" alt="Morris & Sons Group" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Built From The Ground Up</p>
          <h1>A family-owned crew with real asphalt experience.</h1>
          <p>Morris & Sons Group was built by asphalt people, not salespeople. Our team brings hands-on experience across crew work, supervision and project delivery, giving clients reliable support from the first call through to the final roll.</p>
          <p>Whether you need extra labour, a full crew, plant support or help delivering your own asphalt package, we focus on being easy to deal with, safe on site and committed to a clean finish.</p>
        </div>
      </section>

      <section className="section why-section">
        <div className="section-heading center">
          <p>Why Morris & Sons</p>
          <h1>Reliable Asphalt support without the corporate runaround.</h1>
        </div>
        <p className="why-copy">We keep things simple — experienced crews, clear communication and quality outcomes. Whether it’s labour hire, full crew support or asphalt works, we focus on being easy to deal with, turning up prepared and delivering work we’re proud to put our name on.</p>
        <div className="pill-row">
          <span>Family Owned</span>
          <span>Experienced Crews</span>
          <span>Day & Night Works</span>
          <span>South East QLD</span>
        </div>
        <a className="gold-cta" href="#contact">Discuss Your Next Project</a>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy">
          <p className="eyebrow">Get In Touch</p>
          <h1>Need asphalt support or pricing for a job?</h1>
          <p>Send through the job details and we’ll come back with practical pricing, availability and the best way to approach the works.</p>
          <div className="director-list">
            {directors.map((director) => (
              <article key={director.name} className="director-card">
                <p>{director.name}</p>
                <h2>{director.title}</h2>
                <a href={`mailto:${director.email}`}>{director.email}</a>
                <a href={`tel:${director.tel}`}>{director.phone}</a>
              </article>
            ))}
          </div>
          <p className="service-area">⌖ Brisbane, Ipswich, Logan, Gold Coast & wider South East Queensland</p>
        </div>
        <form
  className="contact-form"
  action="https://api.web3forms.com/submit"
  method="POST"
>
  <input
    type="hidden"
    name="access_key"
    value="20936dfa-08fd-4e0f-8d5a-c30033448636"
  />

  <input
    type="hidden"
    name="subject"
    value="New Website Enquiry - Morris & Sons Group"
  />
          <input placeholder="Name" />
          <input placeholder="Company" />
          <input placeholder="Email / Phone" />
          <select defaultValue="">
            <option value="" disabled>What do you need?</option>
            <option>Asphalt Works</option>
            <option>Crew Hire</option>
            <option>Labour Hire</option>
            <option>Plant / Gear Support</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Tell us about the job, location, date and scope" />
          <button type="submit">Submit Enquiry</button>
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-left">
          <img src="/images/logo.png" alt="Morris & Sons Group" />
          <p>Asphalt & civil solutions across South East Queensland.</p>
        </div>
        <div className="compliance">
          <img src="/images/labour-hire-teal.png" alt="Registered Labour Hire Provider Queensland Government" />
          <img src="/images/labour-hire-black.png" alt="Registered Labour Hire Provider Queensland Government" />
          <img src="/images/labour-hire-white.png" alt="Registered Labour Hire Provider Queensland Government" />
          <div className="licence">Licence No.: LHL-09803-G5X6L</div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Morris & Sons Group Pty Ltd. All rights reserved.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
