import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">Singapore Tours</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/tours">Туры</Link></li>
            <li><a href="#contacts">Контакты</a></li>
            <li><a href="#order">Заказать тур</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
