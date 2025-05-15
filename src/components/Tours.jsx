import '../styles/Tours.css'
import { Link } from 'react-router-dom'

const tourList = [
  { id: 'marina', title: 'Marina Bay Sands', image: '/src/assets/tour1.jpg' },
  { id: 'gardens', title: 'Gardens by the Bay', image: '/src/assets/tour2.jpg' },
  { id: 'sentosa', title: 'Sentosa Island', image: '/src/assets/tour3.jpg' }
]

function Tours() {
  return (
    <div className="tours" id="tours">
      <h2>Популярные туры</h2>
      <div className="tours-grid">
        {tourList.map(tour => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.title} />
            <h3>{tour.title}</h3>
            <Link to={`/details/${tour.id}`} className="details-button">Подробнее</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tours