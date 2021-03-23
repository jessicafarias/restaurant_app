import cover from '../assets/header.jpg';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className="header">
        <img src={cover} alt ="cover_image"></img>
        <div className="darker"></div>
        <div className="header_text">
          <h1 className="text-center">RESTAURANT PAGE</h1>
          <h2 className="text-center subtitle">Food Blogger</h2>
        </div>
      </div>
    </header>
  )
}

export default Header;