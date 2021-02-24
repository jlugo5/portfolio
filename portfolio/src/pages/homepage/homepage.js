import './homepage.css'
import ecom from '../../assets/ecom.png'
import monster from '../../assets/monster.png'

const Homepage = () => {

    return (
        <div className='projects'>
            <a className='project' href='https://monster-rollodex.vercel.app/'>
                <img src={monster} alt='monster web'/>
                <h3>Monster Rollodex</h3>
            </a>
            <a className='project' href='https://ecom-shop.vercel.app/'>
                <img src={ecom} alt='ecom web'/>
                <h3>Ecom-Shop</h3>
            </a>
        </div>
    )
}

export default Homepage