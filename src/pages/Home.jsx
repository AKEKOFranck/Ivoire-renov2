import '../styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <section className='home_main'>
            <div className='home_cont'>
                <h1 className='home_title'>
                    Ivoire Renov
                </h1>
                 <Link to='/Work'>
                <button className='home_bt' type='button'>
                    Decouvrez nos projets 
                </button>
                </Link>
                <h2 className='home_title'>
                    L'Art de la création
                </h2>
            </div>
        </section>
    )
}


