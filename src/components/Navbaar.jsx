import { Navbar, Container, Nav } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";
import resume from "../assets/files/Anshul-kushwah-Resume.pdf";
import {RxSlash,RxChevronLeft,RxChevronRight} from "react-icons/rx";
import { CgFileDocument } from "react-icons/cg";

export const Navbaar = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "Anshul-kushwah-Resume.pdf"
    link.download = "Anshul-kushwah-Resume.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        style={{backgroundColor:"#e6e6e6",height:"4rem",boxShadow:"rgba(85, 83, 83, 0.429) 0px 5px 10px"}}
        // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      >
        <Container>
          {/* links */}
        <Nav.Link id="user-detail-name" style={{display:"flex" ,alignItems:"center",justifyContent:"center", color:"#353232",fontSize:"25px",fontFamily:"-moz-initial"}} href="#about">
                Anshul Kushwah
        </Nav.Link>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
          {/* helo */}
            <Nav className="me-auto"></Nav>
            <Nav  style={{ gap:"30px",alignItems:"center"}}>
             {/* <div style={{display:"flex",gap:"30px",alignItems:"center"}}> */}
             <Nav.Link href="#home" className="nav-link home" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >Home</Nav.Link>
              <Nav.Link eventKey={2} href="#about" className="nav-link about" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >
                About
              </Nav.Link>
              <Nav.Link href="#skills" className="nav-link skills" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >Skills</Nav.Link>
              <Nav.Link href="#MyStats" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >My Stats</Nav.Link>
              <Nav.Link href="#projects" className="nav-link projects" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >Projects</Nav.Link>
              <Nav.Link eventKey={2} href="#contact" className="nav-link contact" style={{color:"#454343",fontWeight:"bold",fontSize:"17px"}} >
                Contact
              </Nav.Link>
              <Navbar.Brand>
            {/* Resume */}
            <Button
              className="nav-link resume" //m-2
              id="resume-button-1"
              variant="success"
              // href={resume}
              onClick={handleDownload}
              target="_blank"
              style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#d6e9e9",color:"#454343"}}
            >
              <CgFileDocument style={{marginBottom:"3px",marginRight:"5px"}}/>
              Resume
              
            </Button>
          </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

//