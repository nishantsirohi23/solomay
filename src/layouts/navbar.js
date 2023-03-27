import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarExample = () => {
    return(
       <>    
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Solomay</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <Nav className="me-auto">
                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>  
                <Nav.Link as={Link} to="/restaurants">Restaurants </Nav.Link>  
            </Nav>
  </div>
</nav>

        <section>
                        <Outlet></Outlet>
            </section> 
       </> 
    )
}
export default NavBarExample