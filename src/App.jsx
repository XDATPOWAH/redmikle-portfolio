import { useEffect, useRef, useState } from 'react'

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null)
  const avatarVideoRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveVideo(null)
    }

    const forceAutoplay = () => {
      const autoplayVideos = document.querySelectorAll('video[data-autoplay="true"]')

      autoplayVideos.forEach((video) => {
        video.muted = true
        video.defaultMuted = true
        video.playsInline = true

        const playPromise = video.play()
        if (playPromise?.catch) playPromise.catch(() => {})
      })
    }

    forceAutoplay()
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('touchstart', forceAutoplay, { once: true })
    window.addEventListener('scroll', forceAutoplay, { once: true })

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('touchstart', forceAutoplay)
      window.removeEventListener('scroll', forceAutoplay)
    }
  }, [])
  const works = [
    {
      className: 'tile video-tile',
      tone: 'light',
      name: 'Pantene cream promo',
      description: 'Pantene Cream is a nourishing hair treatment that helps hydrate, smooth frizz, and leave hair softer, shinier, and easier to manage.',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779099322/02_Foap_Pantene_Excitement_Greasiness_Tellme_Berenice_02_ccqv4e.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779099322/02_Foap_Pantene_Excitement_Greasiness_Tellme_Berenice_02_ccqv4e.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'mid',
      name: 'Travel video',
      description: 'Travel video with various visual effects',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101226/TURKEY_FINALE_vd1slh.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101226/TURKEY_FINALE_vd1slh.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'dark',
      name: 'Personal Stylist app promo',
      description: 'AI-powered fashion styling app that helps users discover their personal style through outfit recommendations, color analysis, and guidance from professional stylists.',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100157/2025-11-30_MYR_Video_WhatReallyHelpedMeStopFeelingLikeNothingFitsMeRight-WG-TryNow_ProblemSolution_AIFitCheck_recDNibQIfwxQVTjw_en_reelorg_ndxfi6.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100157/2025-11-30_MYR_Video_WhatReallyHelpedMeStopFeelingLikeNothingFitsMeRight-WG-TryNow_ProblemSolution_AIFitCheck_recDNibQIfwxQVTjw_en_reelorg_ndxfi6.mp4',
    },
    { className: 'tile tile-third', tone: 'mid', name: 'Name004', description: 'Project description will be added later.' },
    { className: 'tile tile-third', tone: 'white', name: 'Name005', description: 'Project description will be added later.' },
    { className: 'tile tile-half', tone: 'mid', name: 'Name006', description: 'Project description will be added later.' },
    { className: 'tile tile-half', tone: 'dark', name: 'Name007', description: 'Project description will be added later.' },
    { className: 'tile tile-third tall', tone: 'white', name: 'Name008', description: 'Project description will be added later.' },
    { className: 'tile tile-third tall', tone: 'dark', name: 'Name009', description: 'Project description will be added later.' },
    { className: 'tile tile-third tall', tone: 'dark2', name: 'Name010', description: 'Project description will be added later.' },
  ]

  const exp = [
    {
      title: 'Motion Designer',
      company: 'Develux',
      years: '2024 — Present',
      points: [
        'Design static and dynamic ad creatives for Instagram, TikTok and Facebook — from brief to final delivery',
        'Develop original concepts based on social media trends, competitor analysis and campaign objectives',
        'Integrate AI-generated visuals and avatars into ad workflows, reducing production time significantly',
        'Analyse creative performance data and iterate on underperforming assets',
      ],
    },
    {
      title: 'Motion Designer / Video Editor',
      company: 'EPC Network',
      years: '2023 — 2024',
      points: [
        'Produced video ads tailored to platform-specific formats — in-feed, stories, carousels and bumper ads',
        'Built a library of reusable motion templates, cutting turnaround time for campaigns',
        'Adapted global creative assets for regional markets, adjusting tone, pace and visual language',
        'Delivered 20+ ad packages per month meeting strict quality and brand compliance standards',
      ],
    },
    {
      title: 'Video Editor',
      company: 'Natus Vincere',
      years: '2022 — 2023',
      points: [
        'Edited esports and gaming content from raw footage — highlights, vlogs, event recaps and branded videos',
        'Applied motion graphics, color grading and sound design to maintain brand identity across output',
        'Managed end-to-end post-production for multiple simultaneous projects with tight deadlines',
        'Liaised with creative directors and social media teams to align video output with campaign goals',
      ],
    },
  ]

  return (
    <main className="site-shell">
      <nav className="glass-nav">
        <a href="#hero" className="nav-logo">MR</a>
        <div className="nav-links">
          <a href="#about">About me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="hero" className="hero reveal">
        <div className="signature" aria-label="Mykhailo Razumnyi">
          <span className="first-name">Mykhailo</span>
          <span className="last-name">Razumnyi</span>
        </div>

        <video
          ref={avatarVideoRef}
          className="avatar avatar-video avatar-video-desktop"
          src="https://res.cloudinary.com/dwcnbqox0/video/upload/f_mp4/v1779145544/0519_fgd255.mp4"
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="auto"
          data-autoplay="true"
          onLoadedData={(event) => event.currentTarget.play().catch(() => {})}
          onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
        />

        <img
          className="avatar avatar-gif-mobile"
          src="https://res.cloudinary.com/dwcnbqox0/image/upload/v1779050970/avatar_iej7an.png"
          alt="Mykhailo Razumnyi avatar"
        />

        <p className="subtitle">Video editor / Post production /<br />Motion Design</p>
      </section>

      <section id="about" className="bio-exp">
        <article className="about reveal delay-1">
          <img className="paperclip-img" src="https://res.cloudinary.com/dwcnbqox0/image/upload/v1779050984/Group_37_epwbda.png" alt="pin" />
          <div className="photo-placeholder">
            <img src="https://res.cloudinary.com/dwcnbqox0/image/upload/v1779142149/PHOTO_DONE_oiojbq.jpg" alt="Mykhailo Razumnyi" />
          </div>

          <h1>Mykhailo Razumnyi</h1>

          <p>
            I got into video editing the way most people do — obsessively, for free,
            for strangers on the internet. Travel vlogs, lifestyle content, hunting films,
            product promos — I edited anything I could get my hands on, learning the craft
            frame by frame. Four years and several studios later, I now specialise in motion
            design and performance marketing.
          </p>

          <p>
            Creatives for social media — designing scroll-stopping visuals across TikTok,
            Instagram and Facebook that are built to convert, not just look good. From brand
            identity systems and UGC-style content to dynamic ad formats, I work across the
            full creative spectrum. AI platforms, apps and tools are now a core part of my
            daily workflow, not a gimmick.
          </p>

          <p>
            Based in Warsaw. Always looking for projects where the brief is ambitious and
            the timeline is tight.
          </p>
        </article>

        <aside className="experience reveal delay-2">
          <h2>Work Experience</h2>

          <div className="timeline">
            {exp.map((item) => (
              <section className="role" key={item.title + item.company}>
                <span className="dot"></span>
                <h3>{item.title}</h3>
                <div className="company">{item.company}</div>
                <div className="years">{item.years}</div>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </aside>
      </section>

      <section id="portfolio" className="portfolio-grid reveal delay-3">
        {works.map((work, index) => (
          <article key={index} className={`${work.className} ${work.tone} ${work.preview ? 'has-video' : ''}`} tabIndex="0">
            {work.preview && (
              <video
                className="project-preview"
                src={work.preview}
                autoPlay
                muted
                defaultMuted
                loop
                playsInline
                preload="auto"
                data-autoplay="true"
                onLoadedData={(event) => event.currentTarget.play().catch(() => {})}
                onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
              />
            )}

            <div className="project-hover">
              <div className="hover-copy">
                <div className="hover-name">{work.name}</div>
                <p>{work.description}</p>
              </div>

              {work.fullVideo && (
                <button className="watch-button" onClick={() => setActiveVideo(work)}>
                  Watch full
                </button>
              )}
            </div>
          </article>
        ))}
      </section>

      <footer id="contact" className="footer reveal delay-4">
        <div className="footer-left">
          <span>Get in touch</span>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>

        <div className="footer-right">
          <p>
            If you have an idea or a project you’d like to work on, feel free to reach out to
            me by email. I’m always open to new opportunities and I’d be happy to discuss.
            Let’s create something great!
          </p>
          <button>Send me a message</button>
        </div>
      </footer>

      {activeVideo && (
        <div className="video-modal" role="dialog" aria-modal="true" onClick={() => setActiveVideo(null)}>
          <button className="modal-close" onClick={() => setActiveVideo(null)} aria-label="Close video">×</button>
          <div className="modal-video-wrap" onClick={(event) => event.stopPropagation()}>
            <video src={activeVideo.fullVideo} controls autoPlay playsInline className="modal-video" />
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');

        :root {
          --bg: #1d1b1b;
          --neon: #d7ff00;
          --olive: #383f10;
          --olive-border: #b7d200;
          --orange: #ff542c;
          --text: #f1f1f1;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--bg); }
        a, button { cursor: pointer; }

        .site-shell {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: var(--bg);
          color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, Arial, sans-serif;
          padding: 0 16px 18px;
          scroll-padding-top: 96px;
        }

        .glass-nav {
          position: fixed;
          z-index: 50;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: min(90vw, 720px);
          height: 56px;
          padding: 8px 10px 8px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.06));
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          box-shadow: 0 18px 55px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.24);
        }

        .nav-logo {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          color: #111;
          background: var(--neon);
          border-radius: 50%;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: -.08em;
          text-decoration: none;
          transition: transform .25s ease;
        }
        .nav-logo:hover { transform: scale(1.06); }

        .nav-links { display: flex; align-items: center; gap: 6px; }

        .nav-links a {
          color: rgba(255,255,255,.86);
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 14px;
          border-radius: 999px;
          transition: background .25s ease, color .25s ease, transform .25s ease;
        }
        .nav-links a:hover {
          background: rgba(255,255,255,.16);
          color: var(--neon);
          transform: translateY(-1px);
        }

        .reveal { animation: softIn .75s cubic-bezier(.22,1,.36,1) both; }
        .delay-1 { animation-delay: .08s; }
        .delay-2 { animation-delay: .16s; }
        .delay-3 { animation-delay: .24s; }
        .delay-4 { animation-delay: .32s; }

        @keyframes softIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero {
          position: relative;
          width: 100%;
          max-width: 980px;
          min-height: 100vh;
          margin: 0 auto;
          padding-top: 82px;
          text-align: center;
          overflow: visible;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .signature {
          position: relative;
          z-index: 1;
          width: 100%;
          color: var(--neon);
          font-family: 'Rock Salt', cursive;
          line-height: .72;
          text-align: center;
          transform: rotate(-2deg);
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: visible;
          margin-inline: auto;
        }

        .first-name {
          display: block;
          font-size: clamp(48px, 6.8vw, 92px);
          margin-left: 0;
          margin-bottom: 8px;
          letter-spacing: -1px;
          position: relative;
          z-index: 3;
          align-self: center;
        }

        .last-name {
          display: block;
          font-size: clamp(78px, 11vw, 162px);
          letter-spacing: clamp(-7px, -.45vw, -2px);
          margin-top: -18px;
          line-height: .88;
        }

        .avatar {
          display: block;
        }

        .avatar-video,
        .avatar-gif-mobile {
          position: relative;
          z-index: 4;
          display: block;
          width: clamp(240px, 33vw, 470px);
          height: auto;
          margin: clamp(-120px, -7vw, -42px) auto 0;
          filter: drop-shadow(0 8px 24px rgba(0,0,0,.34));
          transition: transform .5s cubic-bezier(.22,1,.36,1), filter .5s ease;
        }

        .avatar-gif-mobile {
          display: none;
        }
        .hero:hover .avatar-video,
        .hero:hover .avatar-gif-mobile {
          transform: translateY(-4px) scale(1.015);
          filter: drop-shadow(0 16px 32px rgba(0,0,0,.48));
        }

        .subtitle {
          position: relative;
          z-index: 2;
          margin: 22px 0 0;
          color: rgba(255,255,255,.78);
          font-size: clamp(17px, 2vw, 36px);
          line-height: 1.15;
          font-weight: 300;
        }

        .bio-exp {
          width: min(90vw, 1100px);
          max-width: none;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(28px, 5vw, 70px);
          align-items: start;
        }

        .about { position: relative; padding-top: 13px; }

        .photo-placeholder {
          width: clamp(126px, 18vw, 270px);
          aspect-ratio: 1 / 1.08;
          background: #d7d7d7;
          border-radius: clamp(12px, 1.8vw, 28px);
          transform: rotate(-2deg);
          margin-bottom: 28px;
          overflow: hidden;
          transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s ease;
        }
        .photo-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about:hover .photo-placeholder {
          transform: rotate(-1deg) translateY(-3px);
          box-shadow: 0 16px 36px rgba(0,0,0,.28);
        }

        .paperclip-img {
          position: absolute;
          width: clamp(54px, 5.6vw, 86px);
          height: auto;
          left: clamp(8px, 1.2vw, 20px);
          top: clamp(-10px, -.5vw, -2px);
          z-index: 4;
          transform: rotate(-4deg);
          pointer-events: none;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,.22));
        }

        .about h1 {
          margin: 0 0 14px;
          font-size: clamp(34px, 3.8vw, 58px);
          line-height: .98;
          letter-spacing: -1.8px;
          font-weight: 500;
        }

        .about p {
          margin: 0 0 26px;
          max-width: 520px;
          font-size: clamp(16px, 1.45vw, 24px);
          line-height: 1.18;
          color: rgba(255,255,255,.82);
          font-weight: 300;
        }

        .experience {
          background: var(--olive);
          border: 1px solid var(--olive-border);
          border-radius: clamp(18px, 2vw, 32px);
          padding: clamp(28px, 3vw, 56px) clamp(28px, 3.5vw, 66px);
          color: white;
          overflow: hidden;
          transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s ease;
        }
        .experience:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 45px rgba(0,0,0,.24);
        }

        .experience h2 {
          margin: 0 0 28px;
          font-size: clamp(34px, 4vw, 64px);
          line-height: 1;
          font-weight: 400;
          letter-spacing: -1.8px;
          text-align: left;
        }

        .timeline {
          position: relative;
          margin-left: 10px;
          padding-left: clamp(28px, 3vw, 48px);
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 13px;
          width: 2px;
          height: calc(100% - 6px);
          background: linear-gradient(to bottom, var(--neon) 0%, rgba(215,255,0,.68) 48%, rgba(215,255,0,0) 100%);
        }

        .role { position: relative; padding-bottom: clamp(24px, 3vw, 44px); }
        .role:last-child { padding-bottom: 0; }

        .dot {
          position: absolute;
          width: 16px;
          height: 16px;
          background: var(--neon);
          border-radius: 50%;
          left: calc(-1 * clamp(28px, 3vw, 48px) - 7px);
          top: 2px;
          box-shadow: 0 0 0 7px rgba(215,255,0,.08);
        }

        .role h3 {
          margin: 0 0 16px;
          color: var(--neon);
          font-size: clamp(24px, 2.4vw, 42px);
          line-height: 1.05;
          font-weight: 800;
        }

        .company, .years {
          font-size: clamp(15px, 1.45vw, 22px);
          line-height: 1.2;
          color: rgba(255,255,255,.72);
          margin-bottom: 8px;
        }

        .role ul { margin: 18px 0 0; padding-left: 24px; }
        .role li {
          font-size: clamp(14px, 1.1vw, 18px);
          line-height: 1.22;
          color: rgba(255,255,255,.82);
          margin-bottom: 9px;
        }

        .portfolio-grid {
          width: min(90vw, 1100px);
          max-width: none;
          margin: 86px auto 0;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: clamp(10px, 1.2vw, 18px);
        }

        .tile {
          border-radius: clamp(16px, 2.2vw, 44px);
          min-height: 120px;
          position: relative;
          overflow: hidden;
          transition: transform .5s cubic-bezier(.22,1,.36,1), filter .5s ease, box-shadow .5s ease;
          isolation: isolate;
          outline: none;
        }
        .tile:hover, .tile:focus-visible {
          transform: translateY(-5px) scale(1.01);
          filter: brightness(.98);
          box-shadow: 0 18px 42px rgba(0,0,0,.28);
        }

        .video-tile { grid-column: span 2; aspect-ratio: 9 / 16; height: auto; min-height: 0; }
        .tile-small { grid-column: span 2; height: clamp(180px, 20vw, 360px); }
        .tile-wide { grid-column: span 4; height: clamp(180px, 20vw, 360px); }
        .tile-third { grid-column: span 2; height: clamp(180px, 20vw, 360px); }
        .tile-half { grid-column: span 3; height: clamp(150px, 16vw, 285px); }
        .tile-third.tall { height: clamp(180px, 20vw, 360px); }

        .light { background: linear-gradient(145deg, #b9b9b9 0%, #f4f4f4 100%); }
        .mid { background: #bfbfbf; }
        .dark { background: #949493; }
        .dark2 { background: #9d9d9c; }
        .white { background: #fbfbfb; }

        .project-preview {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .has-video::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 2;
          background: rgba(0,0,0,0);
          transition: background .35s ease;
        }
        .has-video:hover::after,
        .has-video:focus-within::after { background: rgba(0,0,0,.46); }

        .project-hover {
          position: absolute;
          inset: 0;
          z-index: 3;
          padding: clamp(18px, 2.2vw, 42px) clamp(18px, 2.6vw, 48px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity .38s ease, transform .38s cubic-bezier(.22,1,.36,1);
          background: transparent;
          color: var(--neon);
        }
        .tile:hover .project-hover,
        .tile:focus-within .project-hover {
          opacity: 1;
          transform: translateY(0);
        }

        .hover-copy {
          max-width: min(84%, 430px);
        }
        .hover-name {
          font-size: clamp(20px, 2.25vw, 38px);
          line-height: .95;
          font-weight: 900;
          letter-spacing: -.045em;
          color: var(--neon);
        }
        .hover-copy p {
          margin: 10px 0 0;
          max-width: 360px;
          color: rgba(255,255,255,.88);
          font-size: clamp(11px, .95vw, 15px);
          line-height: 1.18;
          font-weight: 400;
        }
        .watch-button {
          border: 0;
          border-radius: 999px;
          background: var(--neon);
          color: #161616;
          padding: 10px 20px;
          font-size: clamp(11px, .95vw, 15px);
          line-height: 1;
          font-weight: 800;
          text-transform: uppercase;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .watch-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0,0,0,.28);
        }

        .video-modal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(0,0,0,.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .modal-video-wrap {
          width: min(92vw, 520px);
          aspect-ratio: 9 / 16;
          max-height: 88vh;
          border-radius: 22px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 25px 80px rgba(0,0,0,.52);
        }
        .modal-video {
          display: block;
          width: 100%;
          height: 100%;
          max-height: 88vh;
          object-fit: contain;
          background: #000;
        }
        .modal-close {
          position: fixed;
          top: 22px;
          right: 24px;
          z-index: 101;
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.14);
          color: white;
          font-size: 32px;
          line-height: 1;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .footer {
          width: min(90vw, 1100px);
          max-width: none;
          margin: 34px auto 0;
          min-height: 122px;
          background: var(--orange);
          color: #070707;
          border-radius: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          padding: 24px 34px 24px;
          gap: 26px;
        }

        .footer-left span { display: block; font-size: 12px; margin-bottom: 18px; }
        .footer-left a {
          display: block;
          width: fit-content;
          font-size: clamp(26px, 2.4vw, 40px);
          line-height: 1.25;
          font-weight: 800;
          color: #0b0b0b;
          text-decoration: none;
          transition: transform .25s ease, opacity .25s ease;
        }
        .footer-left a:hover { transform: translateX(4px); opacity: .72; }

        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }
        .footer-right p {
          max-width: 420px;
          margin: 0 0 18px;
          font-size: clamp(12px, 1vw, 16px);
          line-height: 1.18;
          text-align: right;
          color: #111;
        }
        .footer button {
          border: 0;
          background: #171717;
          color: white;
          border-radius: 999px;
          padding: 12px 42px;
          font-size: 14px;
          font-weight: 800;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }
        .footer button:hover {
          transform: translateY(-2px) scale(1.02);
          background: #050505;
          box-shadow: 0 10px 24px rgba(0,0,0,.22);
        }

        @media (max-width: 760px) {
          .site-shell { padding: 0 8px 14px; }
          .glass-nav { width: calc(100vw - 20px); height: 52px; padding-left: 10px; }
          .nav-links { gap: 0; }
          .nav-links a { font-size: 11px; padding: 9px 8px; }
          .nav-logo { width: 34px; height: 34px; font-size: 12px; }

          .hero { min-height: 100vh; max-width: 100%; padding-top: 78px; }
          .first-name {
            margin-left: 0;
            margin-bottom: 4px;
            font-size: 36px;
          }
          .last-name {
            font-size: 68px;
            letter-spacing: -3px;
            margin-top: -10px;
          }
          .avatar-video-desktop {
            display: none;
          }

          .avatar-gif-mobile {
            display: block;
            width: 250px;
            margin-top: -18px;
            background: transparent;
            object-fit: contain;
          }
          .subtitle { font-size: 15px; }

          .bio-exp {
            grid-template-columns: 1fr;
            width: 100%;
            max-width: 100%;
            gap: 28px;
            margin-top: 18px;
          }

          .about {
            padding-inline: 24px;
            display: block;
          }
          .paperclip-img {
            width: 54px;
            left: 18px;
            top: -8px;
          }
          .photo-placeholder { margin-bottom: 24px; width: 126px; height: auto; aspect-ratio: 1 / 1.08; border-radius: 12px; }
          .about h1 { font-size: 25px; align-self: auto; }
          .about p { font-size: 11px; max-width: 420px; }

          .experience { border-radius: 14px; padding: 22px 20px; min-height: auto; }
          .experience h2 { font-size: 34px; text-align: left; margin-bottom: 22px; }
          .role h3 { font-size: 22px; }
          .company, .years { font-size: 16px; }
          .role li { font-size: 12.5px; line-height: 1.25; }
          .timeline { padding-left: 22px; margin-left: 8px; }
          .dot { left: -25.5px; width: 11px; height: 11px; }

          .portfolio-grid {
            width: 100%;
            max-width: 100%;
            margin-top: 38px;
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .tile,
          .tile-small,
          .tile-wide,
          .tile-third,
          .tile-half,
          .tile-third.tall { grid-column: span 1; height: 180px; }
          .video-tile { grid-column: span 1; aspect-ratio: 9 / 16; height: auto; }
          .tile-wide, .tile-half { grid-column: span 1; height: 180px; }
          .project-hover { padding: 18px; }
          .hover-copy { max-width: 92%; }
          .hover-name { font-size: 24px; }
          .hover-copy p { font-size: 11px; max-width: 260px; }
          .watch-button { font-size: 10px; padding: 9px 15px; }
          .modal-video-wrap { width: min(94vw, 520px); border-radius: 18px; }
          .modal-close { top: 14px; right: 14px; }

          .footer {
            margin-top: 34px;
            grid-template-columns: 1fr;
            gap: 18px;
            align-items: stretch;
            padding: 20px 18px 18px;
            width: 100%;
          }
          .footer-right { align-items: flex-start; text-align: left; }
          .footer-right p { max-width: 310px; font-size: 10px; text-align: left; }
          .footer-left a { font-size: 24px; }
          .footer button { font-size: 11px; padding: 10px 26px; }
        }
      `}</style>
    </main>
  )
}
