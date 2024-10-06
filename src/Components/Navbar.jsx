const Navbar = () =>{
    return (

<nav>
<div className="logo">
  <img src="/images/brand.logo.png" alt="logo" />
</div>

<ul>
  <li>Menu</li>
  <li>Location</li>
  <li>About</li>
  <li>Contact</li>
</ul>

<div>
  <button className="nav-btn">Login</button>
</div>
</nav>
    );
}

export default Navbar;