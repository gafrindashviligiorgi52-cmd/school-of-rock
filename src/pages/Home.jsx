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

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <header className="heroSection">
        <img className="heroBg" src={bandPhoto} alt="Live Stage Background" />

        <div className="headerGlass">
          <h1 className="mainTitle">School of Rock</h1>
        </div>

        <div className="heroCenterText">
          <img src={pfp} alt="School of Rock Icon" className="logo" />
          <h2>This is<br />School of <span>Rock</span></h2>
        </div>

        <div className="heroScroll">
          <span>↓</span>
        </div>
      </header>

      {/* ─── BENTO GRID ─── */}
      <section className="showcaseContainer">
        <div className="bentoGrid">

          <div className="bentoItem largePhoto">
            <img className="fullImg" src={bigPhoto2} alt="Band Live 1" />
          </div>

          <Link to="/guitar" className="bentoItem instrumentBox">
            <img className="thumb" src={guitarPhoto} alt="Guitar" />
            <div className="instrumentInfo">
              <h3>გიტარა</h3>
              <p>ნიკო, ლევანი</p>
            </div>
            <span className="arrowIcon">→</span>
          </Link>

          <Link to="/bass" className="bentoItem instrumentBox">
            <img className="thumb" src={bassPhoto} alt="Bass" />
            <div className="instrumentInfo">
              <h3>ბასი</h3>
              <p>ნოე</p>
            </div>
            <span className="arrowIcon">→</span>
          </Link>

          <div className="bentoItem textCard">
            <h4>Live Music</h4>
            <p>გაჟღერებული ემოციები და სუფთა როკ ენ როლი.</p>
          </div>

          <Link to="/drums" className="bentoItem instrumentBox">
            <img className="thumb" src={drumsPhoto} alt="Drums" />
            <div className="instrumentInfo">
              <h3>დრამი</h3>
              <p>ამიკო</p>
            </div>
            <span className="arrowIcon">→</span>
          </Link>

          <div className="bentoItem tallPhoto">
            <img className="fullImg" src={photo1} alt="Band Live 2" />
          </div>

          <div className="bentoItem tallPhoto">
            <img className="fullImg" src={photo2} alt="Band Live 3" />
          </div>

          <div className="bentoItem largePhoto">
            <img className="fullImg" src={bigPhoto} alt="Band Live 4" />
          </div>

        </div>
      </section>

      {/* ─── SOCIALS ─── */}
      <section className="socialsSection">
        <p className="socialsLabel">გამოგვყევი</p>

        <div className="socialsGrid">

          <a
            href="https://www.instagram.com/rockschool.ge/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard"
          >
            <div className="socialImgWrap">
              <img src={instagram} alt="Instagram" />
            </div>
            <div className="socialInfo">
              <span className="socialName">Instagram</span>
              <span className="socialHandle">@rockschool.ge</span>
            </div>
            <span className="socialArrow">↗</span>
          </a>

          <a
            href="https://www.tiktok.com/@rockschoolge"
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard"
          >
            <div className="socialImgWrap">
              <img src={tiktok} alt="TikTok" />
            </div>
            <div className="socialInfo">
              <span className="socialName">TikTok</span>
              <span className="socialHandle">@rockschoolge</span>
            </div>
            <span className="socialArrow">↗</span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100092001915473"
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard"
          >
            <div className="socialImgWrap">
              <img src={facebook} alt="Facebook" />
            </div>
            <div className="socialInfo">
              <span className="socialName">Facebook</span>
              <span className="socialHandle">School of Rock</span>
            </div>
            <span className="socialArrow">↗</span>
          </a>

        </div>
      </section>
    </>
  )
}