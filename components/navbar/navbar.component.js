import { useEffect, useState } from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'

export default function NavBar() {
  const scrollNav = "fixed-top bg-transparent"
  const scrollNavActive = "fixed-top bg-warning shadow"
  const [scrollnNav, setScrollNav] = useState(scrollNav);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  });

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setScrollNav(scrollNavActive);
    } else {
      setScrollNav(scrollNav);
    }
  }

  return (
    <>
      <Navbar expand="lg" className={scrollnNav}>
        <Container fluid className="px-5">
          <Navbar.Brand href="#home" className="fw-bold">
            <Image src="./image/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <div className="row">
            <div className="col-12">
              <div className="ms-auto text-end pe-2 text-delivery">
                <p>Express Delivery +1234-567-890</p>
              </div>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto fw-bold">
                <Nav.Link href="#home" active>HOME</Nav.Link>
                <Nav.Link href="#link">MENU</Nav.Link>
                <Nav.Link href="#link">OUR STORY</Nav.Link>
                <Nav.Link href="#link">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>

        </Container>
      </Navbar>
    </>
  )
}