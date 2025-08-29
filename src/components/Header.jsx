import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <Link to=''>
            <h3 className='nav_title'>
                Ivoire Renov
            </h3>
            </Link>

            <nav>
                <Link to='' className='nav_link'>Accueil</Link>
                <Link to='/Work' className='nav_link'>Créations</Link>
                <Link to='/About' className='nav_link'>Présentation</Link>
                <Link to='/Info' className='nav_link'>Contacts</Link>
            </nav>
        </header>
    )
}