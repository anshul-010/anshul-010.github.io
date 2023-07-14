import { Navbar, Container, Nav } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";
import resume from "../assets/files/Anshul_kushwah_Resume.pdf";
import {RxSlash,RxChevronLeft,RxChevronRight} from "react-icons/rx";
import { CgFileDocument } from "react-icons/cg";

export const Navbaar = () => {

  // const [isOpen, setOpen] = useState(false)
  return (
    <div className="navbar-container">
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="dark"
        variant="dark"
        fixed="top"
        id="nav-menu"
        className="animate-navbar nav-theme justify-content-between"
        style={{backgroundColor:"#c7c7c7",height:"4rem"}}
      >
        <Container>
        <Nav.Link style={{display:"flex" ,alignItems:"center",justifyContent:"center", color:"#353232",fontSize:"25px",fontFamily:"-moz-initial"}} href="#about">
                Anshul Kushwah
              </Nav.Link>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
          {/* helo */}
            <Nav className="me-auto"></Nav>
            <Nav  style={{ gap:"30px",alignItems:"center"}}>
             {/* <div style={{display:"flex",gap:"30px",alignItems:"center"}}> */}
             <Nav.Link href="#home" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >Home</Nav.Link>
              <Nav.Link eventKey={2} href="#about" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >
                About
              </Nav.Link>
              <Nav.Link href="#skills" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >Skills</Nav.Link>
              <Nav.Link href="#MyStats" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >My Stats</Nav.Link>
              <Nav.Link href="#projects" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >Projects</Nav.Link>
              <Nav.Link eventKey={2} href="#contact" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >
                Contact
              </Nav.Link>
              <Navbar.Brand>
            {/* Resume */}
            <Button
              className="m-2"
              variant="success"
              href={resume}
              target="_blank"
              style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#d6e9e9",color:"#454343"}}
            >
              <CgFileDocument style={{marginBottom:"3px",marginRight:"5px"}}/>
              Resume
              
            </Button>
          </Navbar.Brand>
             {/* </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
