import './BotonNav.css'
import {Link} from 'react-router-dom'

export default function BotonNav({dir,name}) {
  return (
    <div className='button-nav'>
        <Link to={`${dir}`}>{name}</Link>
    </div>
  )
}
