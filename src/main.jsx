import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const GITHUB = 'https://github.com/dhairya7096';
const LINKEDIN = 'https://www.linkedin.com/in/dhairya-patel-91a416244';
const EMAIL = 'mailto:patelpatidar7096@gmail.com';

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    github: <><path d="M15 22v-4.2c0-1.4-.5-2.3-1.5-2.8 4.9-.5 7-2.4 7-6.8 0-1.3-.5-2.5-1.3-3.5.1-.3.6-1.7-.1-3.4 0 0-1.1-.4-3.6 1.3a12.4 12.4 0 0 0-6.5 0C6.5.9 5.4 1.3 5.4 1.3c-.7 1.7-.2 3.1-.1 3.4A5.3 5.3 0 0 0 4 8.2c0 4.4 2.1 6.3 7 6.8-1 .5-1.5 1.4-1.5 2.8V22"/><path d="M9 18c-3 .9-3-1.5-4.2-1.9"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2"/><rect x="2" y="8" width="4" height="13"/><circle cx="4" cy="4" r="2"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    arrow: <><path d="M5 19 19 5"/><path d="M7 5h12v12"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    x: <><path d="M6 6l12 12M18 6 6 18"/></>,
    map: <><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 5h4M11 18h2"/></>,
    spark: <><path d="m12 2 1.4 5.6L19 9l-5.6 1.4L12 16l-1.4-5.6L5 9l5.6-1.4L12 2ZM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    const move = (e) => setMouse({ x: (e.clientX / window.innerWidth - .5) * 2, y: (e.clientY / window.innerHeight - .5) * 2 });
    window.addEventListener('scroll', scroll);
    window.addEventListener('mousemove', move);
    return () => { window.removeEventListener('scroll', scroll); window.removeEventListener('mousemove', move); };
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };
  const tilt = { transform: `perspective(1100px) rotateX(${mouse.y * -3}deg) rotateY(${mouse.x * 5}deg)` };

  return (
    <div className="site">
      <div className="grid-bg" />
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <button className="brand" onClick={() => go('home')}><span>DP</span><b>Dhairyakumar</b></button>
        <nav className={menu ? 'navlinks open' : 'navlinks'}>
          <button onClick={() => go('about')}>About</button><button onClick={() => go('work')}>Work</button><button onClick={() => go('stack')}>Stack</button><button onClick={() => go('contact')}>Contact</button>
        </nav>
        <div className="navsocial"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18}/></a></div>
        <button className="menubtn" onClick={() => setMenu(!menu)} aria-label="Menu"><Icon name={menu ? 'x' : 'menu'}/></button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse"/> COMPUTER ENGINEERING • DEVELOPER</div>
            <h1>Building <em>digital</em><br/>products that matter.</h1>
            <p>I’m Dhairyakumar Patel, a Computer Engineering student exploring Android, React, backend systems, AI and GIS — turning real-world problems into useful software.</p>
            <div className="hero-actions"><button className="primary" onClick={() => go('work')}>View my work <Icon name="arrow" size={17}/></button><a className="ghost" href={GITHUB} target="_blank" rel="noreferrer"><Icon name="github" size={18}/> GitHub</a></div>
            <div className="micro-stack"><span>JAVA</span><span>REACT</span><span>PYTHON</span><span>FIREBASE</span><span>GIS</span></div>
          </div>
          <div className="hero-visual" style={tilt}>
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="glow"/>
            <div className="dev-card">
              <div className="windowbar"><i/><i/><i/><span>dhairya.dev</span></div>
              <div className="codebody"><div><small>01</small> <b>const</b> <strong>developer</strong> = {'{'}</div><div className="indent"><small>02</small> focus: <em>"real-world"</em>,</div><div className="indent"><small>03</small> mobile: <em>"Android"</em>,</div><div className="indent"><small>04</small> web: <em>"React"</em>,</div><div className="indent"><small>05</small> systems: <em>"AI + GIS"</em></div><div><small>06</small> {'};'}</div><div><small>07</small> <span className="typecursor"/></div></div>
              <div className="card-foot"><span><span className="green-dot"/> building</span><span>IND • 2026</span></div>
            </div>
            <div className="float-chip chip-map"><Icon name="map" size={15}/> GIS / Maps</div><div className="float-chip chip-ai"><Icon name="spark" size={15}/> AI Systems</div>
          </div>
        </section>

        <section id="about" className="section about"><div className="section-kicker">01 / ABOUT</div>
          <div className="about-grid"><div><h2>I like solving <span>problems</span>, not just writing code.</h2></div><div><p>I enjoy building practical software across mobile, web, backend, AI and geospatial experiences.</p><p className="muted">Understand the problem → design the experience → build it → test it → improve what matters.</p></div></div>
          <div className="principles"><article><b>01</b><h3>Understand</h3><p>Start from the user and the actual problem.</p></article><article><b>02</b><h3>Design</h3><p>Turn complexity into a clear experience.</p></article><article><b>03</b><h3>Build</h3><p>Ship functional software, not just mockups.</p></article><article><b>04</b><h3>Improve</h3><p>Iterate from feedback and real usage.</p></article></div>
        </section>

        <section id="work" className="section work"><div className="section-kicker">02 / FEATURED WORK</div>
          <div className="project-head"><div><div className="status"><span className="green-dot"/> IN DEVELOPMENT</div><h2>AcreNex</h2><p>One Parcel • One ULPIN • Complete Land Intelligence</p></div><span className="project-num">01</span></div>
          <div className="project-card"><div className="map-art"><div className="map-grid"/><div className="parcel p1"/><div className="parcel p2"/><div className="parcel p3"/><div className="pin"><Icon name="map" size={20}/></div><div className="map-label">PARCEL INTELLIGENCE</div><div className="map-label small">ULPIN • GIS • LAND DATA</div></div><div className="project-info"><div><span className="mini-label">THE IDEA</span><p>A land intelligence interface designed around parcel-level information, GIS visualization and citizen-facing workflows.</p></div><div className="tags"><span>Android</span><span>Java</span><span>XML</span><span>Firebase</span><span>GIS</span><span>REST API</span></div><a className="project-link" href="#contact" onClick={(e) => { e.preventDefault(); go('contact'); }}>Discuss the project <Icon name="arrow" size={17}/></a></div></div>
        </section>

        <section id="stack" className="section stack"><div className="section-kicker">03 / TOOLKIT</div><div className="stack-head"><h2>Tools I use to <span>build.</span></h2><p>A focused toolkit instead of a wall of badges.</p></div><div className="stack-grid"><Skill icon="phone" title="Mobile" items="Android · Java · XML"/><Skill icon="code" title="Web" items="React · JavaScript · Responsive UI"/><Skill icon="database" title="Backend" items="Python · FastAPI · SQL · REST"/><Skill icon="map" title="Data & Spatial" items="Firebase · GIS · Digital Mapping"/></div></section>

        <section className="section statement"><div className="statement-box"><Icon name="spark" size={25}/><h2>Good software should feel<br/><span>obvious to use.</span></h2><p>Clean interfaces. Useful systems. Thoughtful engineering.</p></div></section>

        <section id="contact" className="section contact"><div className="section-kicker">04 / CONTACT</div><div className="contact-grid"><div><h2>Let’s build something <span>meaningful.</span></h2><p>Have an idea, project or technical problem worth exploring? Reach out.</p></div><div className="contact-links"><a href={GITHUB} target="_blank" rel="noreferrer"><Icon name="github"/><div><b>GitHub</b><small>github.com/dhairya7096</small></div><Icon name="arrow" size={17}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer"><Icon name="linkedin"/><div><b>LinkedIn</b><small>linkedin.com/in/dhairya-patel-91a416244</small></div><Icon name="arrow" size={17}/></a><a href={EMAIL}><Icon name="mail"/><div><b>Email</b><small>patelpatidar7096@gmail.com</small></div><Icon name="arrow" size={17}/></a></div></div></section>
      </main>
      <footer><span>© 2026 Dhairyakumar Patel</span><span>Designed & engineered with React</span></footer>
    </div>
  );
}

function Skill({ icon, title, items }) { return <article className="skill"><div className="skill-icon"><Icon name={icon}/></div><h3>{title}</h3><p>{items}</p><span className="arrow">↗</span></article>; }

createRoot(document.getElementById('root')).render(<App />);
