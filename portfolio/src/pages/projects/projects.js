import './projects.css'
import ecom from '../../assets/ecom.png'
import monster from '../../assets/monster.png'

const Projects = () => {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <a className='project' href='https://monster-rollodex.vercel.app/'>
                <img src={monster} alt='monster web'/>
                <h3>Monster Rollodex</h3>
                <p className='detail'>Display a list of Character/User with a search bar that filter the list. </p>
            </a>
            <a className='project' href='https://ecom-shop.vercel.app/'>
                <img src={ecom} alt='ecom web'/>
                <h3>Ecom-Shop</h3>
                <p className='detail'>Simulates an online shopping store. User can login and insert item to the cart. 
                    Navigate through the diferent parts of the store and checkout.
                </p>
            </a>
        </div>
        
    )
}

export default Projects