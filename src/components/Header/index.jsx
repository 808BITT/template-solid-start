import logo from '../../assets/logo.svg';

import './Header.css';

function Header() {
  return (
    <div class="Container">
        <img src={logo} class="Logo" alt="logo" />
        <h1 class="Title">Bobbitt</h1>
    </div>
  )
}

export default Header;