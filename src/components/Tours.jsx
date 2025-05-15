import '../styles/Tours.css'
import tour1 from '../assets/tour1.jpg'
import tour2 from '../assets/tour2.jpg'
import tour3 from '../assets/tour3.jpg'

function Tours() {
  return (
    <div className="tours" id="tours">
      <h2>Популярные туры в Сингапур</h2>
      <div className="tours-grid">
        <div className="tour-card">
          <img src={tour1} alt="Тур 1" />
          <h3>Marina Bay Sands</h3>
          <p>Исследуйте центр Сингапура с гидом. Прогулки, музеи, кухня.</p>
          <button>Подробнее</button>
        </div>
        <div className="tour-card">
          <img src={tour2} alt="Тур 2" />
          <h3>Gardens by the Bay</h3>
          <p>Посещение Gardens by the Bay, ботанического сада и пляжей.</p>
          <button>Подробнее</button>
        </div>
        <div className="tour-card">
          <img src={tour3} alt="Тур 3" />
          <h3>Sentosa</h3>
          <p>Центр отдыха и развлечений для взрослых и детей, центр пляжной жизни, трекинговые маршруты по джунглям</p>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  )
}

export default Tours
