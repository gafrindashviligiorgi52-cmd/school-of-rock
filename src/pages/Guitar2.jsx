import '../pagescss/Guitar2.css'
import photo from '../assets/images/pfp.png'
import { Link } from 'react-router-dom'
import levani from '../assets/revalimages/levani.png'

export default function Guitar2() {
  return (
    <div className='flex-container-2'>

      {/* უკან დაბრუნების ღილაკი - მთავარ გვერდზე */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button>უკან 🎸</button>
      </Link>

      {/* დიდი ფოტოს სექცია */}
      <div className='image-section-2'>
        <img src={levani} alt="Guitarist Levani" />
      </div>

      {/* მინიმალისტური ტექსტის სექცია */}
      <div className='info-section-2'>
        <h1>გიტარა</h1>
        <h1>ლევანი <br /> გვარი იდკ</h1>
        <h2>Band: <strong>ლინკი</strong></h2>
        <h2>instagram: <strong>ლინკი</strong></h2>

        {/* პირველ მასწავლებელზე გადასვლა */}
        <Link to="/guitar" style={{ textDecoration: 'none' }}>
          <button className='next-btn-2'>← ნიკო მანტიძე</button>
        </Link>
      </div>

    </div>
  )
}