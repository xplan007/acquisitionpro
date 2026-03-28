import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Integrity First',
    desc: 'We only work with coaches we genuinely believe we can help. No hype, no inflated claims.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Speed & Consistency',
    desc: 'Coaches need momentum. Our systems are built to stay active and optimized week after week.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Niche Expertise',
    desc: 'We focus exclusively on executive and leadership coaches — deep specialization beats generalism every time.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Data-Driven',
    desc: "Every campaign is measured, optimized, and reported on. If it's not working, we fix it — fast.",
  },
]

const stats = []

export default function AboutUs() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', color: 'var(--white)' }}>

      {/* Nav */}
      <nav className="nav scrolled">
        <div className="container nav-inner">
          <Link to="/" className="logo">
            <img src="/logo-new.png" alt="AcquisitionPro" className="logo-image" />
            <span className="logo-text">Acquisition<span>Pro</span></span>
          </Link>
          <Link to="/" className="nav-cta">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Glow orbs */}
        <div style={{
          position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
            style={{
              display: 'inline-block', padding: '6px 18px', borderRadius: '100px',
              background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)',
              color: 'var(--accent)', fontSize: '13px', fontWeight: 600,
              letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '24px',
            }}
          >
            About AcquisitionPro
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 700, lineHeight: 1.1, marginBottom: '24px',
            }}
          >
            Built for Coaches.
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            style={{
              fontSize: '1.15rem', color: 'var(--white-dim)', maxWidth: '580px',
              margin: '0 auto', lineHeight: 1.7,
            }}
          >
            AcquisitionPro is a done-for-you LinkedIn outreach agency exclusively serving
            executive and leadership coaches who are serious about growing their practice.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '80px 0', background: 'var(--black-light)' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px', alignItems: 'center',
          }}>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            >
              <p style={{
                color: 'var(--accent)', fontWeight: 600, fontSize: '13px',
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px',
              }}>
                Our Story
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700, lineHeight: 1.2, marginBottom: '24px',
              }}>
                Why We Focus Only on Coaches
              </h2>
              <p style={{ color: 'var(--white-dim)', lineHeight: 1.75, marginBottom: '18px' }}>
                We started AcquisitionPro after noticing that talented executive and leadership
                coaches were struggling not because of their skills, but because they lacked a
                reliable, repeatable way to attract new clients.
              </p>
              <p style={{ color: 'var(--white-dim)', lineHeight: 1.75, marginBottom: '18px' }}>
                Most agencies are generalists. They'll run LinkedIn campaigns for anyone, gyms,
                e-commerce brands, SaaS companies. That means coaches never get the focused
                expertise their niche demands.
              </p>
              <p style={{ color: 'var(--white-dim)', lineHeight: 1.75 }}>
                So we made a decision: <strong style={{ color: 'var(--white)' }}>coaches only.</strong> Every
                strategy, every message, every campaign we build is informed by deep experience
                in the coaching industry, and nothing else.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              style={{
                background: 'var(--black-lighter)',
                borderRadius: '24px',
                padding: '40px',
                border: '1px solid rgba(59,130,246,0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '200px', height: '200px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
                transform: 'translate(40%, -40%)',
              }} />
              <p style={{
                fontSize: '1.5rem', fontStyle: 'italic', lineHeight: 1.6,
                color: 'var(--white)', marginBottom: '24px', position: 'relative', zIndex: 1,
              }}>
                "The best coaches in the world deserve a full calendar, not endless
                uncertainty about where the next client is coming from."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'var(--accent)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontWeight: 700, fontSize: '18px', color: '#fff',
                }}>A</div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '2px' }}>AcquisitionPro Team</p>
                  <p style={{ color: 'var(--white-dim)', fontSize: '14px' }}>Founders</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Values */}
      <section style={{ padding: '80px 0', background: 'var(--black-light)' }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <p style={{
              color: 'var(--accent)', fontWeight: 600, fontSize: '13px',
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              What We Stand For
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700,
            }}>
              Our Core Values
            </h2>
          </motion.div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i * 0.15}
                style={{
                  padding: '32px', borderRadius: '20px',
                  background: 'var(--black-lighter)',
                  border: '1px solid rgba(59,130,246,0.12)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                whileHover={{
                  borderColor: 'rgba(59,130,246,0.35)',
                  boxShadow: '0 0 28px rgba(59,130,246,0.1)',
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: 'rgba(59,130,246,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)', marginBottom: '20px',
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: '10px', fontSize: '1.05rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--white-dim)', lineHeight: 1.65, fontSize: '15px' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer style={{
        padding: '40px 0 24px',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div className="container" style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'center', gap: '16px',
        }}>
          <Link to="/" className="logo">
            <img src="/logo-new.png" alt="AcquisitionPro" className="logo-image" />
            <span className="logo-text">Acquisition<span>Pro</span></span>
          </Link>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--white-dim)', fontSize: '14px', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: 'var(--white-dim)', fontSize: '14px', textDecoration: 'none' }}>Terms of Service</Link>
            <a href="mailto:contact@acquisitionpro.net" style={{ color: 'var(--white-dim)', fontSize: '14px', textDecoration: 'none' }}>contact@acquisitionpro.net</a>
          </div>
          <p style={{ color: 'var(--white-dim)', fontSize: '13px' }}>
            &copy; {new Date().getFullYear()} AcquisitionPro LLC
          </p>
        </div>
      </footer>

    </div>
  )
}
