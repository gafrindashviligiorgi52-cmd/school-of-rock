import '../pagescss/Guitar.css'
import photo from '../assets/revalimages/noe.png'
import { Link } from 'react-router-dom'

export default function Bass() {
  return (
    // მთავარი კონტეინერი
    <div className='flex-container'>
      
      {/* უკან დაბრუნების ღილაკი ახლა შიგნით არის */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button>უკან 🎸</button>
      </Link>

      {/* დიდი ფოტოს სექცია */}
      <div className='image-section'>
        <img src={photo} alt="Guitarist Niko Mantidze" />
      </div>

      {/* მინიმალისტური ტექსტის სექცია */}
      <div className='info-section'>
        <h1>ბასი</h1>
        <h1>ნოე<br/>გაბაშვილი</h1> {/* <br/> დაგვეხმარება დიდ შრიფტზე */}
        {/* <hr /> - HR ამოღებულია CSS-ით */}
        <h2>Band: <strong>ლინკი</strong></h2>
        <h2>instagram: <strong>ლინკი</strong></h2>

      </div>
    </div>
  )
}