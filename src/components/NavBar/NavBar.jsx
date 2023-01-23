import '../../App.css'
import '../../styles/nav.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    {user ?
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className='brand'>Fitness <span>Bros</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="nav-link active" aria-current="page">Home</Nav.Link>
              <Nav.Link href="/workouts" className="nav-link">Workouts</Nav.Link>
              <Nav.Link href="/meals" className="nav-link">Meals</Nav.Link>
              <Nav.Link href="/profiles" className="nav-link">Community</Nav.Link>
              <Nav.Link href={`/profiles/${user.profile}`} className="nav-link">Account</Nav.Link>
              <Nav.Link className="nav-link" to="/" onClick={handleLogout}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      :
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Fitness <span>Bros</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link active" aria-current="page">Home</Nav.Link>
              <Nav.Link href="/workouts" className="nav-link">Workouts</Nav.Link>
              <Nav.Link href="/meals" className="nav-link">Meals</Nav.Link>
              <Nav.Link href="/profiles" className="nav-link">Community</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    }
    </>
  );
}

export default NavBar;
