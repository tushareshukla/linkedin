import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import linkedin from '../../images/linkedin.png';
import './Header.css'
const Header = () => {
  return (
    <div>
        <div className='header-left'>
            <img src={linkedin} alt='logo'/>
            <div className='header-search'>
                <SearchIcon/>
                <input type='text' placeholder='Search'/>   
            </div>

        </div>
        <div className='header-right'>
            
            </div>
    </div>
  )
}

export default Header