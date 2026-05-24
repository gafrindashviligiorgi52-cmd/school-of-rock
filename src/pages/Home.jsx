import '../pagescss/Homec.css'
import pfp from '../assets/images/logo.png'
import bandPhoto from '../assets/images/bandsetup.png'
import { Link } from 'react-router-dom'
import guitarPhoto from '../assets/images/guitarPhoto.png'
import bassPhoto from '../assets/images/bassPhoto.png'
import drumsPhoto from '../assets/images/drumsPhoto.png'
import photo1 from '../assets/revalimages/photo1.png'
import photo2 from '../assets/revalimages/photo2.png'
import bigPhoto from '../assets/revalimages/bigPhoto.png'
import bigPhoto2 from '../assets/revalimages/bigPhoto2.png'
import tiktok from '../assets/mediaphotos/tiktok.webp'
import facebook from '../assets/mediaphotos/facebook.png'
import instagram from '../assets/mediaphotos/instagram.jpeg'

const SOCIALS = [
  {
    href: 'https://www.instagram.com/rockschool.ge/',
    img: instagram,
    name: 'Instagram',
    handle: '@rockschool.ge',
    alt: 'Instagram',
  },
  {
    href: 'https://www.tiktok.com/@rockschoolge',
    img: tiktok,
    name: 'TikTok',
    handle: '@rockschoolge',
    alt: 'TikTok',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=100092001915473',
    img: facebook,
    name: 'Facebook',
    handle: 'School of Rock',
    alt: 'Facebook',
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <header className="heroSection">
        <img className="heroBg" src={bandPhoto} alt="" aria-hidden="true" />

        <div className="headerGlass">
          <h1 className="mainTitle">School of Rock</h1>
        </div>

        <div className="heroCenterText">
          <img src={pfp} alt="School of Rock" className="logo" />
          <h2>
            This is<br />School of <span>Rock</span>
          </h2>
        </div>

        <div className="heroScroll" aria-hidden="true">↓</div>
      </header>

      {/* ── BENTO GRID ── */}
      <section className="showcaseContainer">
        <div className="bentoGrid">

          <div className="bentoItem largePhoto">
            <img className="fullImg" src={bigPhoto2} alt="Band performing live" />
          </div>

          <Link to="/guitar" className="bentoItem instrumentBox">
            <img className="thumb" src={guitarPhoto} alt="" aria-hidden="true" />
            <div className="instrumentInfo">
              <h3>გიტარა</h3>
              <p>ნიკო, ლევანი</p>
            </div>
            <span className="arrowIcon" aria-hidden="true">→</span>
          </Link>

          <Link to="/bass" className="bentoItem instrumentBox">
            <img className="thumb" src={bassPhoto} alt="" aria-hidden="true" />
            <div className="instrumentInfo">
              <h3>ბასი</h3>
              <p>ნოე</p>
            </div>
            <span className="arrowIcon" aria-hidden="true">→</span>
          </Link>

          <div className="bentoItem textCard">
            <h4>Live Music</h4>
            <p>გაჟღერებული ემოციები და სუფთა როკ ენ როლი.</p>
          </div>

          <Link to="/drums" className="bentoItem instrumentBox">
            <img className="thumb" src={drumsPhoto} alt="" aria-hidden="true" />
            <div className="instrumentInfo">
              <h3>დრამი</h3>
              <p>ამიკო</p>
            </div>
            <span className="arrowIcon" aria-hidden="true">→</span>
          </Link>

          <div className="bentoItem tallPhoto">
            <img className="fullImg" src={photo1} alt="Band live" />
          </div>

          <div className="bentoItem tallPhoto">
            <img className="fullImg" src={photo2} alt="Band live" />
          </div>

          <div className="bentoItem largePhoto">
            <img className="fullImg" src={bigPhoto} alt="Band live" />
          </div>

        </div>
      </section>

      {/* ── SOCIALS ── */}
      <section className="socialsSection">
        <p className="socialsLabel">გამოგვყევი</p>
        <div className="socialsGrid">
          {SOCIALS.map(({ href, img, name, handle, alt }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="socialCard"
            >
              <div className="socialImgWrap">
                <img src={img} alt={alt} />
              </div>
              <div className="socialInfo">
                <span className="socialName">{name}</span>
                <span className="socialHandle">{handle}</span>
              </div>
              <span className="socialArrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}