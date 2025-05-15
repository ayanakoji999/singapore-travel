import '../styles/Tours.css'

const tours = [
  {
    id: 1,
    title: 'Город будущего',
    description: 'Познакомьтесь с Сингапуром через футуристическую архитектуру и технологии.',
    image: 'https://images.unsplash.com/photo-1569949383433-df1838f3b7e0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Природные чудеса',
    description: 'Исследуйте парки, водопады и ботанические сады города.',
    image: 'https://images.unsplash.com/photo-1580706483914-6580873b59d6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Ночная жизнь',
    description: 'Откройте лучшие рестораны, бары и вечерние шоу Сингапура.',
    image: 'https://images.unsplash.com/photo-1549921296-3a4d6f8c8133?auto=format&fit=crop&w=800&q=80',
  },
]

function Tours() {
  return (
    <section className="tours">
      <h2>Популярные туры</h2>
      <div className="tours-grid">
        {tours.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <img src={tour.image} alt={tour.title} />
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            <button>Подробнее</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tours
