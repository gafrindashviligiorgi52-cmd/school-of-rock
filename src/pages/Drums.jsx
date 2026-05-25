import '../pagescss/Guitar.css'
import { Link } from 'react-router-dom'
import amiko from '../assets/revalimages/amiko.png'

export default function Drums() {
  return (
    // მთავარი კონტეინერი
    <div className='flex-container'>
      
      {/* უკან დაბრუნების ღილაკი ახლა შიგნით არის */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button>უკან 🥁</button>
      </Link>

      {/* დიდი ფოტოს სექცია */}
      <div className='image-section'>
        <img src={amiko} alt="Drummer Amiko" />
      </div>

      {/* მინიმალისტური ტექსტის სექცია */}
      <div className='info-section'>
        <h1>დრამი</h1>
        <h1>ამიკო<br/>ჩუბინიძე</h1> {/* <br/> დაგვეხმარება დიდ შრიფტზე */}
        {/* <hr /> - HR ამოღებულია CSS-ით */}
        <h2>instagram: 
          <Link to="https://www.instagram.com/amikochubinidze/" target="_blank" rel="noopener noreferrer">
            გადასვლა
          </Link>
          </h2>

      </div>
    </div>
  )
}