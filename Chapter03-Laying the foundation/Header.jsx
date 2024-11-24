import React from 'react'
import ReactDOM from 'react-dom';
import photo1 from './food-delivery.png';
import photo2 from './icons8-user-48.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <img src={photo1} alt="logo" id='img1' />
        <div>
          <input type='searchbar' className='searchbar' placeholder='Search...' />
        </div>
        <img src={photo2} alt="user-icon" id='img2' />
      </header>
    </>
  )
}

export default Header;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);