import './HeroSection.css'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <header className='hero-header'>
      <div className="hero-brand">
        <h1>MyFitLife</h1>
      </div>
      
      <nav className="hero-nav">
        <ul>
          <li>
            <Link to={'/Home'} className="nav-link">
              <span className="link-icon">🏠</span>
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to={'/Nutricion'} className="nav-link active">
              <span className="link-icon">🥗</span>
              <span className="link-text">Nutrición</span>
            </Link>
          </li>
          <li>
            <Link to={'/Gym'} className="nav-link">
              <span className="link-icon">🏋️</span>
              <span className="link-text">Gym</span>
            </Link>
          </li>
          <li>
            <Link to={'/Calistenia'} className="nav-link">
              <span className="link-icon">🤸</span>
              <span className="link-text">Calistenia</span>
            </Link>
          </li>
          <li>
            <Link to={'/Consejos'} className="nav-link">
              <span className="link-icon">💡</span>
              <span className="link-text">Consejos</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}