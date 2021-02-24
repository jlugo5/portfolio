import './header.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='App-header'>
            <h1 className='App-name'>Johnathan Lugo</h1>
            <p>
            Computer Science | Orlando, FL
            </p>
            <div className='options'>
                <Link className='option' to='/'>Home</Link>
                <Link className='option' to='/projects'>Projects</Link>
                {/* <Link className='option'>About</Link> */}
            </div>
        </div>
    )
}
export default Header