import { useEffect, useRef, useState } from 'react'

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Redmikle'
  }, [])
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
    // Row 1 — 3 vertical videos
    {
      className: 'tile video-tile featured-video',
      tone: 'dark',
      name: 'Motion animation',
      description: 'Apple inspired motion animation for Playboi Carti song',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779214955/WAKEUP_sssw4u.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779214955/WAKEUP_sssw4u.mp4',
    },
    {
      className: 'tile video-tile featured-video',
      tone: 'dark2',
      name: 'Collage',
      description: 'Abstract motion collage inspired by Asap Rocky',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779099598/COLLAGE_yac8br.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779099598/COLLAGE_yac8br.mp4',
    },
    {
      className: 'tile video-tile featured-video',
      tone: 'mid',
      name: 'Travel video',
      description: 'Travel video with various visual effects',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101226/TURKEY_FINALE_vd1slh.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101226/TURKEY_FINALE_vd1slh.mp4',
    },

    // Row 2 — horizontal video
    {
      className: 'tile video-tile video-wide featured-video',
      tone: 'dark',
      name: 'UI Animation',
      description: 'Web app UI animation',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779099867/AI_DETECTOR_fixed_wtzdbi.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779099867/AI_DETECTOR_fixed_wtzdbi.mp4',
    },

    // Row 3 — 3 vertical videos
    {
      className: 'tile video-tile',
      tone: 'mid',
      name: 'Abstract',
      description: 'Space abstract visuals',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101080/GO_new_jz20cn.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101080/GO_new_jz20cn.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'dark',
      name: 'Collage',
      description: 'Animated collage',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101015/DAMN_gcmswd.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101015/DAMN_gcmswd.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'dark2',
      name: 'Fast cut edit',
      description: 'Web app promo, UI animation',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100176/MEET_SP_2_VERTICAL_mixs7g.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100176/MEET_SP_2_VERTICAL_mixs7g.mp4',
    },

    // Row 4 — horizontal video
    {
      className: 'tile video-tile video-wide',
      tone: 'mid',
      name: 'AI actor',
      description: 'Performance marketing with the main AI actor',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779102961/scrip_2_kyna1j.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779102961/scrip_2_kyna1j.mp4',
    },

    // Row 5 — 3 vertical videos
    {
      className: 'tile video-tile',
      tone: 'mid',
      name: 'Personal Stylist app promo',
      description: 'AI-powered fashion styling app that helps users discover their personal style through outfit recommendations, color analysis, and guidance from professional stylists.',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779185173/2025-11-27_MYR_Video_IM50AndThisIsWhyIStartedDressingBasedOnMyArchetype-WG-JustTakeThisQuizAndDiscoverYourArchetype_ProblemSolution_OldScriptNewFormat_rec1D2CSer4tiRqJ1_en_reelorg_han9xe.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779185173/2025-11-27_MYR_Video_IM50AndThisIsWhyIStartedDressingBasedOnMyArchetype-WG-JustTakeThisQuizAndDiscoverYourArchetype_ProblemSolution_OldScriptNewFormat_rec1D2CSer4tiRqJ1_en_reelorg_han9xe.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'light',
      name: 'Personal Stylist app promo',
      description: 'AI-powered fashion styling app that helps users discover their personal style through outfit recommendations, color analysis, and guidance from professional stylists.',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100157/2025-11-30_MYR_Video_WhatReallyHelpedMeStopFeelingLikeNothingFitsMeRight-WG-TryNow_ProblemSolution_AIFitCheck_recDNibQIfwxQVTjw_en_reelorg_ndxfi6.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100157/2025-11-30_MYR_Video_WhatReallyHelpedMeStopFeelingLikeNothingFitsMeRight-WG-TryNow_ProblemSolution_AIFitCheck_recDNibQIfwxQVTjw_en_reelorg_ndxfi6.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'dark',
      name: 'Student App',
      description: 'Marketing promo for app that helps students with their homework',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779214865/StudyPro_mfstkx.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779214865/StudyPro_mfstkx.mp4',
    },

    // Row 6 — horizontal video
    {
      className: 'tile video-tile video-wide',
      tone: 'light',
      name: 'AI actor',
      description: 'Performance marketing with the main AI actor',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779103047/script14_michael_jiya4m.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779103047/script14_michael_jiya4m.mp4',
    },

    // Remaining rows — vertical videos grouped by 3
    {
      className: 'tile video-tile',
      tone: 'mid',
      name: 'Pantene cream promo',
      description: 'Pantene Cream is a nourishing hair treatment that helps hydrate, smooth frizz, and leave hair softer, shinier, and easier to manage.',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779099322/02_Foap_Pantene_Excitement_Greasiness_Tellme_Berenice_02_ccqv4e.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779099322/02_Foap_Pantene_Excitement_Greasiness_Tellme_Berenice_02_ccqv4e.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'dark2',
      name: 'Pantene cream promo',
      description: 'Pantene Cream is a nourishing hair treatment that helps hydrate, smooth frizz, and leave hair softer, shinier, and easier to manage.',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100123/07_Foap_Pantene_Excitement_Usage_Regimen_Splitscreen_Victoria_a3t8yk.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100123/07_Foap_Pantene_Excitement_Usage_Regimen_Splitscreen_Victoria_a3t8yk.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'mid',
      name: 'Home Improvement',
      description: 'Performance marketing video for Home Improvement offer',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779099013/B1_46_1_s1ndnh.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779099013/B1_46_1_s1ndnh.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'dark2',
      name: 'Home Improvement',
      description: 'Performance marketing video for Home Improvement offer',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100686/BATHROOM_1_kucn9t.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100686/BATHROOM_1_kucn9t.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'light',
      name: 'eCommerce',
      description: 'ReliveX product promo',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100270/back_pain_kx12n8.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100270/back_pain_kx12n8.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'mid',
      name: 'eCommerce',
      description: 'Knife promo',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779102147/3_mjas06.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779102147/3_mjas06.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'dark',
      name: 'eCommerce',
      description: 'Windshield product promo',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779102325/1_llxpi4.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779102325/1_llxpi4.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'mid',
      name: 'Loans',
      description: 'Performance marketing video for Loans offer',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101557/video_1_csicxq.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101557/video_1_csicxq.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'dark2',
      name: 'Loans',
      description: 'Performance marketing video for Loans offer',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101696/spy_00008_mot_055_v03_3D_carousel_TT_ielezr.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779101696/spy_00008_mot_055_v03_3D_carousel_TT_ielezr.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'light',
      name: 'Car insurance',
      description: 'Performance marketing video for car insurance offer',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779102788/car_insurance_v1_1080p_gbe9pl.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779102788/car_insurance_v1_1080p_gbe9pl.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'dark',
      name: 'Casino',
      description: 'Promotional video',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100702/s_1272188374798776_videos_0_rhcqdc.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100702/s_1272188374798776_videos_0_rhcqdc.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'mid',
      name: 'Casino',
      description: 'Promotional video',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100714/s_3120397821681675_videos_0_hkfaah.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779100714/s_3120397821681675_videos_0_hkfaah.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'dark2',
      name: 'Dating',
      description: '18+ web dating app promo',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779103137/APP_promo_2_qkvdna.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779103137/APP_promo_2_qkvdna.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'mid',
      name: 'Dating',
      description: '18+ web dating app promo',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779103304/talk_with_man_vertical_2_f5vpcr.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779103304/talk_with_man_vertical_2_f5vpcr.mp4',
    },
    {
      className: 'tile video-tile',
      tone: 'mid',
      name: 'AI actor',
      description: 'Dating app promo, with the AI actor',
      preview: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779103527/DATE_w4r53o.mp4',
      fullVideo: 'https://res.cloudinary.com/dxmdvizdo/video/upload/v1779103527/DATE_w4r53o.mp4',
    },
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
        <a href="#hero" className="nav-logo">
          <img
            src="https://res.cloudinary.com/dwcnbqox0/image/upload/v1779050970/avatar_iej7an.png"
            alt="MR avatar"
          />
        </a>
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
          src="https://res.cloudinary.com/dwcnbqox0/video/upload/v1779145544/0519_fgd255.webm"
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

        <p className="subtitle">Video editing / Post production /<br />Motion Design</p>
      </section>

      <section id="about" className="bio-exp">
        <article className="about reveal delay-1">
          <img className="paperclip-img" src="https://res.cloudinary.com/dwcnbqox0/image/upload/v1779050984/Group_37_epwbda.png" alt="pin" />
          <div className="photo-placeholder">
            <img src="https://res.cloudinary.com/dwcnbqox0/image/upload/v1779142149/PHOTO_DONE_oiojbq.jpg" alt="Mykhailo Razumnyi" />
          </div>

          <h1>Mykhailo Razumnyi</h1>

          <p>
            I got into video creation the way most people do — obsessively, for free,
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

          <img
            className="about-illustration"
            src="https://res.cloudinary.com/dwcnbqox0/image/upload/v1779230823/Gemini_Generated_Image_ikouq1ikouq1ikou_1_b7fcz8.png"
            alt="3D motion design illustration"
          />
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
          <article
            key={index}
            className={`${work.className} ${work.tone} ${work.preview ? 'has-video' : ''}`}
            tabIndex="0"
            onClick={() => work.fullVideo && setActiveVideo(work)}
            onKeyDown={(event) => {
              if ((event.key === 'Enter' || event.key === ' ') && work.fullVideo) {
                event.preventDefault()
                setActiveVideo(work)
              }
            }}
          >
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
                <button
                  className="watch-button"
                  onClick={(event) => {
                    event.stopPropagation()
                    setActiveVideo(work)
                  }}
                >
                  Watch full
                </button>
              )}
            </div>
          </article>
        ))}
      </section>

      <footer id="contact" className="footer reveal delay-4">
        <div className="footer-illustration-badge">
          <img
            className="footer-illustration"
            src="https://res.cloudinary.com/dwcnbqox0/image/upload/v1779230807/Gemini_Generated_Image_6hz3ge6hz3ge6hz3_1_2_kri5rg.png"
            alt="3D avatar illustration"
          />
        </div>
        <div className="footer-left">
          <span>Get in touch</span>
          <a href="https://www.linkedin.com/in/redmikle/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://t.me/redmikle" target="_blank" rel="noreferrer">Telegram</a>
        </div>

        <div className="footer-right">
          <p>
            If you have an idea, a bold campaign, or a project that needs <strong>high-performing visuals</strong>, motion design, or creative direction — let’s talk. I create content that is built to <strong>grab attention</strong>, drive engagement, and make brands impossible to ignore.
          </p>
          <a className="footer-button" href="mailto:mikler49@gmail.com">Send me a message</a>
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
          position: relative;
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
          isolation: isolate;
          z-index: 200;
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
          background: #ff542c;
          border-radius: 50%;
          overflow: hidden;
          text-decoration: none;
          transition: transform .25s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,.22);
        }

        .nav-logo img {
          width: 78%;
          height: 78%;
          object-fit: cover;
          display: block;
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
          transform: translateY(-18vh);
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
          position: relative;
          width: min(90vw, 1100px);
          max-width: none;
          margin: 90px auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(42px, 6vw, 96px);
          align-items: start;
        }

        .about {
          position: relative;
          padding-top: 13px;
          z-index: 3;
        }

        .about-illustration {
          display: block;
          width: min(112%, 620px);
          margin: 64px 0 0 -18px;
          transform: rotate(-4deg);
          filter: drop-shadow(0 28px 55px rgba(0,0,0,.34));
          pointer-events: none;
          user-select: none;
        }

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
          margin: 0 0 30px;
          max-width: 540px;
          font-size: clamp(18px, 1.55vw, 26px);
          line-height: 1.32;
          color: rgba(255,255,255,.82);
          font-weight: 300;
        }

        .experience {
          position: relative;
          z-index: 2;
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
          width: min(90vw, 1180px);
          max-width: none;
          margin: 120px auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(12px, 1.25vw, 20px);
          align-items: start;
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

        .video-tile {
          grid-column: span 1;
          aspect-ratio: 9 / 16;
          height: auto;
          min-height: 0;
          background: #1a1a1a;
        }
        .video-wide {
          grid-column: span 3;
          aspect-ratio: 16 / 9;
          width: 100%;
        }
        .video-wide:first-child {
          grid-column: span 3;
          aspect-ratio: 16 / 9;
        }
        .featured-video {
          box-shadow: 0 0 0 1px rgba(215,255,0,.18), 0 18px 50px rgba(0,0,0,.22);
        }
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
          position: relative;
          overflow: visible;
          width: min(90vw, 1100px);
          max-width: none;
          margin: 110px auto 0;
          min-height: 220px;
          background: var(--orange);
          color: #070707;
          border-radius: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          padding: 72px 42px 38px;
          gap: 26px;
        }

        .footer-illustration-badge {
          position: absolute;
          width: 88px;
          aspect-ratio: 1 / 1;
          left: 34px;
          top: -36px;
          z-index: 3;
          border-radius: 50%;
          background: var(--orange);
          display: grid;
          place-items: center;
          pointer-events: none;
          user-select: none;
        }

        .footer-illustration {
          width: 88%;
          height: 88%;
          object-fit: contain;
          display: block;
        }

        .footer-left span {
          display: block;
          font-size: 15px;
          margin-top: 8px;
          margin-bottom: 22px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          opacity: .72;
        }
        .footer-left a {
          display: block;
          width: fit-content;
          font-size: clamp(34px, 3vw, 56px);
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
          max-width: 620px;
          margin: 0 0 18px;
          font-size: clamp(14px, 1vw, 18px);
          line-height: 1.45;
          font-weight: 500;
          text-align: right;
          color: #111;
        }
        .footer-button {
          margin-bottom: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          border: 0;
          background: #171717;
          color: white;
          border-radius: 999px;
          padding: 12px 42px;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }
        .footer-button:hover {
          transform: translateY(-2px) scale(1.02);
          background: #050505;
          box-shadow: 0 10px 24px rgba(0,0,0,.22);
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .video-wide,
          .video-wide:first-child {
            grid-column: span 3;
            aspect-ratio: 16 / 9;
          }
        }

        @media (max-width: 760px) {
          .about-illustration {
            display: none;
          }

          .footer-illustration-badge {
            width: 74px;
            left: auto;
            right: 18px;
            top: -34px;
          }

          .footer-illustration {
            width: 88%;
            height: 88%;
          }
          .site-shell { padding: 0 8px 96px; }
          .glass-nav {
            top: 16px;
            bottom: auto;
            width: calc(100vw - 20px);
            height: 52px;
            padding-left: 10px;
          }
          .nav-links { gap: 0; }
          .nav-links a { font-size: 11px; padding: 9px 8px; }
          .nav-logo { width: 34px; height: 34px; font-size: 12px; }

          .hero {
            min-height: 100svh;
            max-width: 100%;
            padding-top: 22vh;
            justify-content: flex-start;
            transform: none;
            padding-bottom: 40px;
          }
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
            gap: 46px;
            margin-top: 56px;
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
          .about p { font-size: 14px; line-height: 1.36; max-width: 420px; margin-bottom: 22px; }

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
            margin-top: 64px;
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .tile,
          .tile-small,
          .tile-wide,
          .tile-third,
          .tile-half,
          .tile-third.tall { grid-column: span 1; height: auto; }
          .video-tile {
            grid-column: span 1;
            width: 100%;
            aspect-ratio: 9 / 16;
            height: auto;
          }
          .video-wide,
          .video-wide:first-child {
            grid-column: span 1;
            width: 100%;
            aspect-ratio: 16 / 9;
            height: auto;
          }
          .project-preview { object-fit: contain; background: #111; }
          .project-hover { padding: 18px; }
          .hover-copy { max-width: 92%; }
          .hover-name { font-size: 24px; }
          .hover-copy p { font-size: 11px; max-width: 260px; }
          .watch-button { font-size: 10px; padding: 9px 15px; }
          .modal-video-wrap { width: min(94vw, 520px); border-radius: 18px; }
          .modal-close { top: 14px; right: 14px; }

          .footer {
            margin-top: 72px;
            grid-template-columns: 1fr;
            gap: 18px;
            align-items: stretch;
            padding: 20px 18px 18px;
            width: 100%;
          }
          .footer-right { align-items: flex-start; text-align: left; }
          .footer-right p { max-width: 340px; font-size: 13px; line-height: 1.34; text-align: left; }
          .footer-left a { font-size: 24px; }
          .footer-button {
            font-size: 11px;
            padding: 10px 26px;
            margin-bottom: 18px;
          }
        }
      `}</style>
    </main>
  )
}
