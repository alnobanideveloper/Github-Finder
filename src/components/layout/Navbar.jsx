import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({title="Github Finder"})=>{
    return(
        <nav className="navbar mb-12 shadow-la bg-neutral text-white">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className='inline pr-2 text-3xl'/>
                    <Link to='/' className='text-lg font-bold align-middle'>{title}</Link>
                </div>
            </div>
        <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>About</Link>
        </nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string,
}
export default Navbar