import '../styles/Hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/src/assets/singapore.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <div className="hero-content">
        <h1>Откройте Сингапур с нами</h1>
        <a href="#tours" className="hero-button">Смотреть туры</a>
      </div>
    </div>
  )
}

export default Hero
