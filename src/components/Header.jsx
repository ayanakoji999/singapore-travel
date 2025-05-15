import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import '../styles/Header.css'

function Header() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#tours') {
      const el = document.getElementById('tours')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <header className="header">
      <div className="logo">Singapore Travel</div>
      <nav>
        <ul className='nav-links'>
          <li><Link to="/#tours">Туры</Link></li>
          <li><Link to="/#contacts">Контакты</Link></li>
          <li><Link to="/tours">Заказать тур</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
