import { useParams } from 'react-router-dom'
import '../styles/TourDetails.css'

const tourData = {
  marina: {
    title: 'Marina Bay Sands',
    description: 'Знаменитый отель с панорамным бассейном и смотровой площадкой в центре Сингапура.',
    image: '/src/assets/tour1.jpg'
  },
  gardens: {
    title: 'Gardens by the Bay',
    description: 'Футуристический парк с супер-деревьями и климатическими биокуполами.',
    image: '/src/assets/tour2.jpg'
  },
  sentosa: {
    title: 'Sentosa Island',
    description: 'Курортный остров с пляжами, парками развлечений и аквариумом.',
    image: '/src/assets/tour3.jpg'
  }
}

function TourDetails() {
  const { id } = useParams()
  const tour = tourData[id]

  if (!tour) return <p>Тур не найден</p>

  return (
    <div className="tour-details">
      <h2>{tour.title}</h2>
      <img src={tour.image} alt={tour.title} />
      <p>{tour.description}</p>
    </div>
  )
}

export default TourDetails
