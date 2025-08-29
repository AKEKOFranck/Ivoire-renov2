import '../styles/Work.css';
import pic1 from '../assets/f2.png';
import pic2 from '../assets/f1.png';
import pic3 from '../assets/f3.png';
import { Link } from 'react-router-dom';

export default function Work() {

    const postData1 = [
        {id:1, image : pic3, lien: "/Build3"},
        {id:2, image : pic2, lien: "/Build2"},
        {id:3, image : pic1, lien: "/Build1"},
        {id:4, image : pic2, lien: "/Build2"},
    ];

    const postData2 = [
        {id:1, image : pic1, lien: "/Build1"},
        {id:2, image : pic2, lien: "/Build2"},
        {id:3, image : pic1, lien: "/Build1"},
        {id:4, image : pic2, lien: "/Build2"},
    ];

    const postData3 = [
        {id:1, image : pic1, lien: "/Build1"},
        {id:2, image : pic1, lien: "/Build1"},
        {id:3, image : pic2, lien: "/Build2"},
        {id:4, image : pic2, lien: "/Build2"},
    ];

    const postData4 = [
        {id:1, image : pic2, lien: "/Build2"},
        {id:2, image : pic2, lien: "/Build2"},
        {id:3, image : pic1, lien: "/Build1"},
        {id:4, image : pic3, lien: "/Build3"},
    ];
    return(
        <section className='work_main'>
            <div className='work_cont'>
                {postData1.map((post1) =>(
                    <div className='work_box'>
                        <Link  key={post1.id} to={post1.lien}>
                            <img className='work_img' src={post1.image} alt='poste'></img>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='work_cont'>
                 {postData2.map((post2) =>(
                    <div className='work_box'>
                        <Link  key={post2.id} to={post2.lien}>
                            <img className='work_img' src={post2.image} alt='poste'></img>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='work_cont'>
                 {postData3.map((post3) =>(
                    <div className='work_box'>
                        <Link  key={post3.id} to={post3.lien}>
                            <img className='work_img' src={post3.image} alt='poste'></img>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='work_cont'>
                 {postData4.map((post4) =>(
                    <div className='work_box'>
                        <Link  key={post4.id} to={post4.lien}>
                            <img className='work_img' src={post4.image} alt='poste'></img>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}