import logo from './myphoto.jpg';
import des from './desdev.png';
import {Link} from 'react-router-dom';
import { Github, Instagram, Facebook, Linkedin, Envelope, GeoAlt} from 'react-bootstrap-icons';
import { Accordion, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Personalised area for friends
    </Tooltip>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div class="col-3 hoverable" id="mycontent" style={{padding:"0px"}}>
          <button class="normal" disabled><img src={des} alt="DEV+DES"  style={{width:"80%", margin:"auto auto"}}></img></button>
          <img src={logo} alt="logo" class="hover border-end border-dark border-2" style={{maxWidth:"100%", height:"100vh"}}/>
        </div>
        <div class="col">
          <div class="row">
            <div class="fw-normal py-4 ps-4 text-white bg col t1" style={{fontSize:"5rem", height:"30%" ,lineHeight:"80px"}}>Mihir Okte</div>
            <div class="col-lg-7 pt-3 bg text-white t2 text-break" style={{fontWeight:"light", fontSize:"0.8rem"}}>
              Hoey! I am BTech Second Year Undergraduate in IIT Delhi from the Department of Mathematics and Computing. 
              I am learning programmer cum developer & a novice graphic designer, besides I am into algorithmic competitive programming(CP) and Web Dev is one of my strong holds.
              The things I like are mainly anime, manga and designing. Sometimes I dance too. This is my portfolio.
              <p class="t4 text-end pe-4">My academic CV is given below.</p> 
            </div>
          </div>
          <div class="row">
            <div class="col m-4 py-3 px-4 border rounded-3 border-2 border-dark">
                <div class="d-flex justify-content-between mb-2">
                  <div class="h2 t1 color">How it's going till now</div>
                </div>
                <Accordion defaultActiveKey="0" class="t2" style={{overflow:"hidden", overflowY:"scroll",height:"374px"}} id="example">
                <Card class="my-1">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div>
                      <div class="row mb-1"><div class="col t2">Web Developer</div><div class="t4 col text-end">Materate Pvt Ltd.</div></div>
                      <div class="row px-3" style={{fontSize:"0.8rem"}}>Designed and implemented and maintaining full responsive web portals for the analysis and testing of student’s progress and competency in mathematics.</div>
                    </div>
                  </Accordion.Toggle>
                </Card>
                <Card class="my-1">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div>
                      <div class="row mb-1"><div class="col t2">Technical Editor</div><div class="t4 col text-end">BSP, IIT Delhi</div></div>
                    </div>
                  </Accordion.Toggle>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div>
                      <div class="row mb-1"><div class="col t2">Representative & Executive</div><div class="t4 col text-end">IIT Delhi</div></div>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" class="t3">
                    <Card.Body>
                    <ul style={{fontSize:"0.9rem"}}>
                      <li class="listele2"><div class="row"><div class="col t2">Academic Mentor</div><div class="t4 col text-end">IIT Delhi</div></div></li>
                      <li class="listele1"><div class="row"><div class="col t2">Dance Representative</div><div class="t4 col text-end">Dance Club IITD</div></div></li>
                      <li class="listele1"><div class="row"><div class="col t2">MathSoc Executive</div><div class="t4 col text-end">MathSoc IITD</div></div></li>
                    </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div class="col pt-2 px-4 m-4">
                <div class="d-flex justify-content-between">
                  <div class="h3 t1 color">Projects</div>
                  <a role="button" href="https://drive.google.com/file/d/1eeSWgZw3fI1ncyeqtRUrGXiRGnvGHWhj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark mb-2">Resume (CV)</a>
                </div>


              <Accordion defaultActiveKey="0" class="t2" style={{overflow:"hidden", overflowY:"scroll",height:"374px"}} id="example">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    React Based Contributor Finder App
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" class="t3">
                    <Card.Body>
                      This App primarily focused upon finding number of contributors for a desired repository and subsequent details like number of forks, full name etc as well. I created this small app as an assignment of something.
                      <hr></hr>
                      <Github size={18} /><a href="https://github.com/Mihirokte/Mihirokte.github.io/tree/master/ocs" target="_blank" rel="noopener noreferrer" class="link-dark ms-3">For repository, Click here! (No not a Rick Roll)</a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>


            </div>
          </div>
          <div class="row bg text-white text-center t3 ps-4">
              <div class="row justify-content-center my-2">
                <div class="col-1"><a role="button" href="https://drive.google.com/file/d/1eeSWgZw3fI1ncyeqtRUrGXiRGnvGHWhj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-white bg text-center"><Github size={18} /></a></div>
                <div class="col-1"><a role="button" href="https://drive.google.com/file/d/1eeSWgZw3fI1ncyeqtRUrGXiRGnvGHWhj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-white bg text-center"><Linkedin size={18} /></a></div>
                <div class="col-1"><a role="button" href="https://drive.google.com/file/d/1eeSWgZw3fI1ncyeqtRUrGXiRGnvGHWhj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-white bg text-center"><Instagram size={18} /></a></div>
                <div class="col-1"><a role="button" href="https://drive.google.com/file/d/1eeSWgZw3fI1ncyeqtRUrGXiRGnvGHWhj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-white bg text-center"><Facebook size={18} /></a></div>
              </div>
              <div class="row justify-content-center mt-2">
                <div class="col-sm-4 text-center" style={{fontSize:"0.9rem"}}><Envelope size={20} /><a role="button" class="text-white text-break" style={{textDecoration: "none"}} href = "mailto: mihirokte77@gmail.com">&nbsp;&nbsp;mihirokte77@gmail.com</a></div>
                <div class="col-sm-4 text-center" style={{fontSize:"0.9rem"}}><GeoAlt size={20} />&nbsp;&nbsp;Gwalior, Madhya Pradesh, India</div>
              </div>

              <div class="row justify-content-center my-2 pb-1">
                <div class="col-5 text-center">Designed and Developed by Mihir Okte</div>
              </div>
          </div>
        </div>
      </div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 50, hide: 400 }}
        overlay={renderTooltip}
      >
        <button class="btn bg fixed-bottom m-3"><Link to="/senpaimode" class="text-white" style={{textDecoration: "none"}}>Senpai Mode</Link></button>
      </OverlayTrigger>
    </div>
  );
}

export default App;
