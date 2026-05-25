import '../pagescss/Guitar.css'
import photo from '../assets/revalimages/niko.png'
import { Link } from 'react-router-dom'


export default function Guitar() {
  return (
    <div className='flex-container'>
      
      {/* უკან დაბრუნების ღილაკი */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button>უკან 🎸</button>
      </Link>

      {/* დიდი ფოტოს სექცია */}
      <div className='image-section'>
        <img src={photo} alt="Guitarist Niko Mantidze" />
      </div>

      {/* მინიმალისტური ტექსტის სექცია */}
      <div className='info-section'>
        <h1>გიტარა</h1>
        <h1>ნიკო<br/>მანთიძე</h1>
        <h2>instagram: 
          <Link to="https://www.instagram.com/nmantidze/" target="_blank" rel="noopener noreferrer">
             გადასვლა
          </Link>
          </h2>

        {/* მეორე მასწავლებელზე გადასვლა */}
        <Link to="/guitar2" style={{ textDecoration: 'none' }}>
          <button className='next-btn'>ლევანი →</button>
        </Link>
      </div>

    </div>
  )
}