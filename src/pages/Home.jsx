import '../pagescss/Homec.css'
import pfp from '../assets/images/logo.png'
import bandPhoto from '../assets/images/bandsetup.png'
import { Routes, Route, Link } from 'react-router-dom'
import Guitar from './Guitar.jsx'
import Bass from './Bass.jsx'
import Drums from './Drums.jsx'
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
      <header className="heroSection">
        <img className="heroBg" src={bandPhoto} alt="Live Stage Background" />

        <div className="headerGlass">
          <h1 className="mainTitle">School of Rock</h1>
        </div>

        <div className="heroCenterText">
          <img src={pfp} alt="School of Rock Icon" className="logo" />
          <h2>This is<br />School of <span>Rock</span></h2>
        </div>

        <div></div>
      </header>

      <section className="showcaseContainer">
        <div className="bentoGrid">

          <div className="bentoItem largePhoto">
            <img className="fullImg" src={bigPhoto2} alt="Band Live 1" />
          </div>

          {/* ✅ Guitar — ლინკი */}
          <Link to="/guitar" className="bentoItem instrumentBox">
            <img className="thumb" src={guitarPhoto} alt="Guitar look" />
            <div className="instrumentInfo">
              <h3>გიტარა</h3>
              <p>ნიკო, ლევანი</p>
            </div>
          </Link>

          {/* ✅ Bass — ლინკი */}
          <Link to="/bass" className="bentoItem instrumentBox">
            <img className="thumb" src={bassPhoto} alt="Bass look" />
            <div className="instrumentInfo">
              <h3>ბასი </h3>
              <p>ნოე</p>
            </div>
          </Link>

          <div className="bentoItem textCard">
            <h4>Live Music</h4>
            <p>გაჟღერებული ემოციები და სუფთა როკ ენ როლი.</p>
          </div>

          {/* ✅ Drums — ლინკი */}
          <Link to="/drums" className="bentoItem instrumentBox">
            <img className="thumb" src={drumsPhoto} alt="Drums look" />
            <div className="instrumentInfo">
              <h3>დრამი</h3>
              <p>ამიკო</p>
            </div>
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

      <div className="socials">

        <Link to="https://www.instagram.com/rockschool.ge/">
      <div className="instagram">
      <img src={instagram} alt="" />
      <p>Instagram</p>
        </div>
        </Link>

        <Link to="https://www.tiktok.com/@rockschoolge">
          <div className="TikTok">
            <img src={tiktok} alt="" className="tiktok" />
            <p>tiktok</p>
          </div>
        </Link>

        <Link to="https://www.facebook.com/profile.php?id=100092001915473">
          <div className="facebook">
            <img src={facebook} alt="" />
            <p>Facebook</p>
          </div>
        </Link>
      </div>

    </>
  )
}