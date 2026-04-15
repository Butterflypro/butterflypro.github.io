import './App.css'

const featuredProjects = [
  {
    title: 'Career Caddy',
    type: 'Student Career Platform',
    summary:
      'Platform designed to streamline career exploration through skill and interest based matching.',
    stack: ['React', 'Supabase', 'API ranker'],
    link: 'https://careercaddy.vercel.app',
  },
  {
    title: '5940 Scouting App',
    type: 'Robotics Scouting App',
    summary:
      'App made for the robotics team to collect data on other robots during competion. Which then that data gets uploaded to a backend and then a spreadsheet.',
    stack: ['React', 'Supabase', 'Google Auth'],
    link: 'https://2026-scouting-app-q77y.vercel.app/',
  },
  {
    title: 'Leaders In Steam',
    type: 'Club App',
    summary:
      ' Built a app for my Leaders In Steam club to list out events and have a contact form for people to reach out to the club.',
    stack: ['React', 'Resend', 'CSS'],
    link: 'https://leadersinsteam.org/',
  },
]

const otherProjects = []


const experience = [
  {
    role: 'Frontend Developer',
    company: 'Freelance + Personal Projects',
    period: 'Now',
    detail:
      'Designing and shipping portfolio-grade experiences that balance personality, responsiveness, and clean code structure.',
  },
  {
    role: 'UI Builder',
    company: 'Product Experiments',
    period: '2025',
    detail:
      'Built interactive concepts, reusable sections, and polished landing pages with a stronger focus on flow and visual rhythm.',
  },
  {
    role: 'Developer in Progress',
    company: 'Always Learning',
    period: '2024',
    detail:
      'Expanded from fundamentals into production-ready React work, paying close attention to layout systems and component thinking.',
  },
]

const capabilities = [
  'Portfolio websites with strong visual direction',
  'Responsive React interfaces that feel intentional',
  'Component-driven design systems',
  'Landing pages with cleaner motion and pacing',
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Lisa Popeanga | Portfolio</p>
          <h1>
            <span className="signature-name">Lisa Popeanga</span> 
          </h1>
          <p className="hero-text">
            I am a High School student with a passion for coding and creating impactful projects. I am also interested in machine learning and artificial intelligence. Through my drive for innovation, I am dedicated to developing solutions that make a difference. My portfolio showcases a range of projects that highlight my skills and creativity in the world of technology.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-link">
              <span>View Projects</span>
              <span className="link-arrow" aria-hidden="true">
                {'->'}
              </span>
            </a>
         
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="tilt-panel tilt-panel-main">
            <div className="mini-nav">
              <span>Home</span>
              <span>Projects</span>
              <span>Contact</span>
            </div>
            <div className="panel-content">
              <p className="panel-kicker">Featured Build ../</p>
           
            </div>
          </div>

          <div className="floating-stack">
            {featuredProjects.slice(0, 2).map((project) => (
              <article className="floating-card" key={project.title}>
                <p>{project.type}</p>
                <strong>{project.title}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marquee-band" aria-label="Skill highlights">
        <div className="marquee-track">
          <span>React</span>
          <span>Full-Stack</span>
          <span>Supabase</span>
          <span>UX Design</span>
          <span>API integration</span>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected Projects</p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="stack-list" aria-label={`${project.title} tech stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                href={project.link}
                className="project-link"
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span>Explore Build</span>
                <span className="link-arrow" aria-hidden="true">
                  {'->'}
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Other projects</p>
        </div>

        <div className="projects-grid">
          {otherProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="stack-list" aria-label={`${project.title} tech stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                href={project.link}
                className="project-link"
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span>Explore Build</span>
                <span className="link-arrow" aria-hidden="true">
                  {'->'}
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      


     

      
    </main>
  )
}

export default App
