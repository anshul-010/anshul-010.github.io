import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../assets/img/profile/My_Pic_1.png";
import resume from "../../assets/files/Anshul_kushwah_Resume.pdf";
import Tilt from "react-parallax-tilt";
import { CgFileDocument } from "react-icons/cg";
import './home2.css';




function Home2() {
  return (
    <Container fluid style={{backgroundColor:"#F0EFEF"}} >
      <Container className="about section" id="about" style={{backgroundColor:"#F0EFEF"}} >
        <Row>
          <Col md={8} className="home-about-description" id="user-detail-intro" >
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About </span> me
            </h1>
            <p className="home-about-body">
              As a Full Stack Web Developer, I have a sharp eye for design and a strong passion for crafting immersive user experiences.
              {/* <br /> */}
              <br />I have a strong understanding of HTML, CSS, and
              <i>
                <b className="purple"> Javascript. </b>
              </i>
              <br />
              <br />
              And I enjoy working with modern frameworks like React and Redux to build dynami, &nbsp;
              <i>
                <b className="purple">responsive web applications </b> I'm always looking for ways to optimize code and improve performance,{" "}
                <b className="purple">
                  and I'm committed to staying up-to-date with the latest best practices and industry trends.
                </b>
              </i>
              <br />
              <br />
              I'm motivated by a deep longing to develop elegant, user-friendly interfaces that enhance the lives of users.
              <br />
              <br />
            </p>
          </Col>
          <Col style={{display:"flex",flexDirection:"column",paddingTop:"150px"}} className="myAvtar">
            <Tilt>
              <img src={myImg}  className="home-img" alt="avatar" style={{ borderRadius: "500px",width:"70%",marginTop:"50px",marginBottom:"30px",margin:"auto"}} />
            </Tilt>
            <Button  className="m-2"
              id="resume-button-2"
              variant="success"
              href={resume}
              target="_blank" style={{display:"flex",alignItems:"center",justifyContent:"center",border:"none",padding:"10px",color:"white",backgroundColor:"#292738",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}><CgFileDocument style={{marginBottom:"3px",marginRight:"5px"}}/>
              Resume</Button>
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
