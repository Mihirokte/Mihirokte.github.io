import { HashRouter, Route, Link } from 'react-router-dom';
import { Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import YouTube from 'react-youtube';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';
import gojo from './mihir satoru.jpg';
import React, {Component} from 'react';
import Carousel from 'react-grid-carousel';
import { Envelope, GeoAlt, Discord} from 'react-bootstrap-icons';
import styled from "@emotion/styled/macro";


export default class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/senpaimode" component={Senpai} />
        </div>
      </HashRouter>
    );
  }
}

function Main() {

  const about = `I am an upcoming Third-Year UG at IIT Delhi (Mathematics and Computing). 
  I develop and design fully functional, creative and usability oriented websites, web apps
  and cross-platform apps. I am interested in Algorithmic Problem Solving and have programmed
  several algorithms based applications & scripts, and a regular competitive coder.
  I love Anime and Manga and out of love I have made a section for that only in this website as
  well. Feel free to connect with me.`

  class TxtRotate {
    constructor(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    }
    tick() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    }
  }
  
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #ffffff }";
    document.body.appendChild(css);
  };

  var Skill = [
    {name: "C++", Lvl: "65", icon:"cplusplus-line"},
    {name: "Python", Lvl: "40", icon:"python-plain"},
    {name: "Java", Lvl: "50", icon:"java-plain"},
    {name: "JavaScript", Lvl: "60", icon:"javascript-plain"},
    {name: "MATLAB", Lvl: "60", icon:"matlab-plain"},
    {name: "C", Lvl: "50", icon:"c-plain"},
    {name: "ReactJS", Lvl: "70", icon:"react-original"},
    {name: "HTML/CSS", Lvl: "85", icon:"html5-plain"},
    {name: "NodeJS", Lvl: "40", icon:"nodejs-plain"},
    {name: "ExpressJS", Lvl: "25", icon:"express-original"},
    {name: "MongoDB", Lvl: "25", icon:"mongodb-plain"},
    {name: "MySQL", Lvl: "40", icon:"mysql-plain"},
    {name: "Android", Lvl: "40", icon:"android-plain"},
    {name: "Firebase", Lvl: "25", icon:"firebase-plain"},
    {name: "ReactNative", Lvl: "60", icon:"react-original"},
    {name: "Git", Lvl:"70", icon:"git-plain"}
  ]

  function Skills(){
    var list = [];
    var i = Skill.length;

    while(i--){
    list.push(
      <div class="row fs-2 align-items-center">
        <div class="col-1">
          <i class={`devicon-${Skill[15-i].icon}`}></i>
        </div>
        <div class="col-11 ps-lg-2 ps-4">
          <div class="bg-white" style={{width:"100%"}}>
            <div class="bg-info h-100 fs-6 px-4 fw-bolder py-1 d-flex flex-row" style={{width: `${Skill[15-i].Lvl}%`}}>
              <div class="d-none d-lg-block">Level:</div><div>{Skill[15-i].Lvl}/100</div>
            </div>
          </div>
        </div>
      </div>
    )}
    return(list);
  }

  function projects(){
    var list = []
    list.push(
    <Carousel.Item>
      <Card style={{width: '16rem'}} style={{color:"#000000", border:"none"}}>
        <Card.Img variant="top" src="https://picsum.photos/300/200?random=1"/>
        <Card.Body>
          <Card.Title>Contributors Retriever</Card.Title>
          <Card.Text>
            Made a React App which retrieves and display the github corntibutions and number of forks of various people in an organisation searched.
          </Card.Text>
          <Button href="https://github.com/Mihirokte/General-Apps" target="_blank" rel="noopener noreferrer">Github Repository</Button>
        </Card.Body>
      </Card>
    </Carousel.Item>
    )
    list.push(
      <Carousel.Item>
        <Card style={{width: '16rem'}} style={{color:"#000000", border:"none"}}>
          <Card.Img variant="top" src="https://picsum.photos/300/200?random=2"/>
          <Card.Body>
            <Card.Title>This site itself</Card.Title>
            <Card.Text>
              Made this site using React.js and several React based libraries.<br></br><span class="text-white">sj</span>
              
            <a href="https://github.com/Mihirokte/myweb"></a>
            </Card.Text>
            <Button href="https://github.com/Mihirokte/myweb" target="_blank" rel="noopener noreferrer">Github Repository</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>
    )

    return(list);
  }

  var allsteps = [
    "Cleared NTSE in 2017",
    "Cleared KVPY in 2018 - AIR 233",
    "Cleared JEE Advanced in 2019 - AIR 913/95",
    "Started learning Designing in 1st year",
    "Graphic Design Intern at Enactus IITD in Summers'20",
    "Joined BSP as Technical Executive at end of 1st year",
    "Joined DanceClub IITD as Dance Rep at end of 1st year",
    "Joined PFC IITD at end of 1st year",
    "Joined MathSoc IITD as Executive",
    "Worked as Project Contributor in MathMaterate in Web Development",
    "Joined Algorithms & Coding Club as Executive",
    "Got Qualified for Foreign Exchange AY 2021-22",
    "Joined AAIP IITD as Creative Coordinator",
    "Working as a SWE Intern at Craze technologies",
    "Working as a Research Intern in Tokyo University of Technology"
  ]

  function steps(){
    var list = [];
    var i = allsteps.length-1;
    var j = i;

    list.push(     
    <div class="zigzag-timeline__item fs-5 fw-bold pt-4 ps-5">
      {allsteps[i]}
      <div className="zigzag-timeline__milestone"></div>
    </div>
    )

    while(i--){
      list.push(          
      <div class="zigzag-timeline__item fs-5 fw-bold pt-4 ps-5">
      {allsteps[i]}
      <div className="zigzag-timeline__milestone"></div>
    </div>)
    }

    return(list);
  }


  const DisplayOver = styled.div({
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: "20px 20px 0 20px",
    boxSizing: "border-box",
  });


  return (
    <div className="container-fluid">
      <div class="row pb-2 pt-4">

        <div class="col-lg-6 col-12 text-lg-start text-center px-5">
          <a role="button" href="https://www.behance.net/mihirokte" target="_blank" rel="noopener noreferrer" class="text-white text-center"><SocialIcon url="https://www.behance.net/mihirokte" bgColor="transparent" fgColor="#ffffff" size={16}/></a>
          <a role="button" href="https://github.com/Mihirokte" target="_blank" rel="noopener noreferrer" class="text-white text-center"><SocialIcon url="https://github.com/Mihirokte" bgColor="transparent" fgColor="#ffffff" size={16} /></a>
          <a role="button" href="https://www.linkedin.com/in/mihir-okte/" target="_blank" rel="noopener noreferrer" class="text-white text-center"><SocialIcon url="https://www.linkedin.com/in/mihir-okte/" bgColor="transparent" fgColor="#ffffff" size={16} /></a>
          <a role="button" href="https://www.instagram.com/mihir_okte/" target="_blank" rel="noopener noreferrer" class="text-white bg text-center"><SocialIcon url="https://www.instagram.com/mihir_okte/" bgColor="transparent" fgColor="#ffffff" size={16}/></a>
        </div>
        <div class="col-lg-5 col-12 text-lg-end text-center align-middle my-auto px-lg-5 px-3">
          <span class="p-lg-3 p-2 fs-4 fw-bolder link1 text-center"><Link to="/" class='link1'>Home</Link></span>
          <span class="p-lg-3 p-2 fs-4 fw-bolder link1 text-center">Holy Space</span>
          <span class="p-lg-3 p-2 fs-4 fw-bolder link1 text-center">Resources</span>
        </div>
      </div>


      <div class="row">
        <div class="col-lg-7 col-12" >
          <div class="row px-lg-5 pt-lg-5 d-none d-lg-block pb-2">
            <span
              class="txt-rotate text-white"
              data-period="2000"
              data-rotate='[ "I am Mihir Okte.", "I program.", "I develop.", "I design." ]'
              style={{fontSize:"6rem", fontWeight:"900"}}>
            </span>
          </div>
          <div class="row px-lg-5 py-lg-3 py-2 px-4 text-white fs-5">
              <div class="col-lg-8 col-12">{about}</div>
          </div>
          <div class="row px-lg-5 px-4 text-white fs-5">
            <div class="col-2"><a role="button" href="https://1drv.ms/b/s!As5LK1syYyiEkQ0_3bNHoXdxHvHl" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light mb-2">Resume</a></div>
          </div>
        </div>
        <div class="col-lg-4 d-none d-lg-block p-5">
          <img class="w-100" src={gojo} />
        </div>
      </div>

      <div class="row py-5">
        <div class="col-lg-5 col-12 text-start px-5">
          <span style={{fontSize:"3rem", fontWeight:"900"}} class="mb-5">Skills</span>
          <div class="mb-4"></div>
          {Skills()}
        </div>
        <div class="col-lg-7 col-12 text-start px-5">
          <span style={{fontSize:"3rem", fontWeight:"900"}} class="ps-3">Projects</span>
          <div class="mb-4"></div>
          <Carousel cols={2} rows={1} gap={10} loop>
            {projects()}
          </Carousel>
          <div class="mb-4"></div>
          <span style={{fontSize:"3rem", fontWeight:"900"}} class="ps-3">Things done</span>
          <div class="mb-2"></div>
          <div class="ps-3 scrolled" style={{height:"250px", overflowY:"scroll"}}>
            {steps()}
          </div>
        </div>
      </div>
      <div class="row p-lg-5 p-3">
          <div class="row my-2 fs-5">
            <div class="col-lg col-12 ps-lg-2 p-0"><Envelope size={25} />&nbsp;&nbsp;me: <a role="button" class="text-white text-break" style={{textDecoration: "none"}} href = "mailto: mihirokte77@gmail.com">mihirokte77@gmail.com</a></div>
            <div class="col-lg col-12 text-lg-end p-0"><GeoAlt size={20} />&nbsp;&nbsp;Zanskar House, IIT Delhi<span class="d-none .d-lg-block .d-xl-block">, New Delhi, India</span></div>
          </div>
      </div>
    </div>
  );
}





























const opts = {
  height: '210',
  width: '380',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function sort(data){
  var result = [];
  data.map((v) => {
    if(Object.values(v)[0] > 9.5){
      result.push(v);
    }
  })
  return result;
}

class Senpai extends Component{

  state = {
    com: [],
    wat: []
  }

  getWat = async (query, variables) => {
    try {
      const response = await axios.post('https://graphql.anilist.co', {
        query,
        variables
      });

      this.setState(() => ({
        wat : Object.values(response.data.data.MediaListCollection.lists[0].entries)
      }));
      
      console.log(Object.values(response.data.data.MediaListCollection.lists[0].entries));

    } catch (error) {
        console.log(error);
    }
  }

  getCom = async (query, variables) => {
    try {
      const response = await axios.post('https://graphql.anilist.co', {
        query,
        variables
      });

      this.setState(() => ({
        com : sort(Object.values(response.data.data.MediaListCollection.lists[0].entries)),
      }));

      console.log(Object.values(response.data.data.MediaListCollection.lists[0].entries));

    } catch (error) {
        console.log(error);
    }
  }

  componentDidMount() {
    const query = `
    query ($username: String, $type: MediaType, $status: MediaListStatus) {
      MediaListCollection(userName: $username, type: $type, status: $status) {
        lists {
          entries {
            score(format: POINT_10_DECIMAL)
            progress
            media {
              episodes
              title { 
                english
                romaji }
            }
          }
        }
      }
    }
    `;
    
    const variables = {'username' : 'MihirOkte', 'type' : 'ANIME', 'status': 'CURRENT'};
    const variables2 = {'username' : 'MihirOkte', 'type' : 'ANIME', 'status': 'COMPLETED'};
    this.getWat(query, variables);
    this.getCom(query, variables2);

  }

  render(){
    const {com, wat} = this.state;

  return (
    <div className="container-fluid">
      <div class="row bg-2 py-3 justify-content-evenly" style={{height:"15%"}}>
        <div class="col-lg-8 fw-normal align-middle text-white text-center t1 bg-2" style={{fontSize:"3rem"}}>ARA ARA! You come to see what's here
        </div>
        <div class="col-lg-4 fw-normal align-middle text-white text-center my-auto py-1 t1"><button class="btn bg ms-auto"><Link to="/" class="text-white" style={{textDecoration: "none"}}>OH NO! Only Anime stuff here, Go Back</Link></button></div>
      </div>
      <div class="row" style={{height:"77%"}}>
        <div class="col">
          <div class="col pt-2 px-4 my-4 ms-0">
            <div class="d-flex justify-content-between mb-2">
              <div class="h3 t1 color">Currently Watching</div>
            </div>

            <ul class="list-group" style={{overflow:"hidden", overflowY:"scroll",height:"428px"}} id="example">
              {wat ? wat.map((v) => (
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="t2 h5 mt-1">{Object.values(Object.values(Object.values(v)[2])[1])[0] ? Object.values(Object.values(Object.values(v)[2])[1])[0] : Object.values(Object.values(Object.values(v)[2])[1])[1]}</div>
                    <div class="t4 ">Progress: {Object.values(v)[1]}/{Object.values(Object.values(v)[2])[0]}</div>
                  </div>
                  <span class="badge bg-primary rounded-pill mt-2">{Object.values(v)[0]}/10</span>
                </li>
                ))
                :
                <li class="list-group-item d-flex justify-content-between align-items-start">Loading .. </li>
              }
            </ul>
            </div>
          <a class="btn btn-success col ms-4 mb-4" href="https://myanimelist.net/profile/MihirOkte" target="_blank" rel="noopener noreferrer" role="button">My MAL Profile</a>
        </div>
        <div class="col">
          <div class="col pt-2 px-4 my-4">
            <div class="d-flex justify-content-between mb-2">
              <div class="h3 t1 color">My Fav Completed Anime</div>
            </div>

            <ul class="list-group" style={{overflow:"hidden", overflowY:"scroll",height:"428px"}} id="example">
              {com ? com.map((v) => (
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="t2 h5 mt-1">{Object.values(Object.values(Object.values(v)[2])[1])[0] ? Object.values(Object.values(Object.values(v)[2])[1])[0] : Object.values(Object.values(Object.values(v)[2])[1])[1]}</div>
                  </div>
                  <span class="badge bg-primary rounded-pill mt-2">{Object.values(v)[0]}/10</span>
                </li>
                ))
                :
                <li class="list-group-item d-flex justify-content-between align-items-start">Loading .. </li>
              }
            </ul>
          
          </div>
          <a class="btn btn-success col ms-4 mb-4" href="https://anilist.co/user/MihirOkte/animelist" target="_blank" rel="noopener noreferrer" role="button">My Anilist Profile</a>
        </div>

        <div class="col">
          <div class="col m-4 py-3 px-4 border rounded-3 border-2 border-primary">
            <div class="d-flex justify-content-between mb-2">
              <div class="h2 t1 text-primary">Favourite Anime Music</div>
            </div>
            <Accordion defaultActiveKey="0" class="t2" style={{overflow:"hidden", overflowY:"scroll",height:"393px"}} id="example">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  My Favourite Anime Opening
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <div class="card text-white bg-primary mb-3">
                      <YouTube videoId="oRAF2-Exzx4" opts={opts} onReady={(e) => e.target.pauseVideo()} className="card-img-top"/>
                      <div class="card-body">
                        <div>
                          <div class="d-flex h5 fs-6"><div class="flex-fill t2">Hikari Are</div><div class="t4 flex-fill text-end">Haikyuu!</div></div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  My Favourite Anime Ending
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div class="card text-white bg-primary mb-3">
                      <YouTube videoId="SQBHr1kGmT0" opts={opts} onReady={(e) => e.target.pauseVideo()} className="card-img-top" />
                      <div class="card-body">
                        <div>
                          <div class="d-flex h5 fs-6"><div class="flex-fill t2">Last Game</div><div class="t4 flex-fill text-end">Stein's Gate;0</div></div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  My Favourite Anime OST
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <div class="card text-white bg-primary mb-3">
                      <YouTube videoId="hoJ4qxcXz5w" opts={opts} onReady={(e) => e.target.pauseVideo()} className="card-img-top"/>
                      <div class="card-body">
                        <div>
                          <div class="d-flex h5 fs-6"><div class="flex-fill t2">ThankAT</div><div class="t4 flex-fill text-end">Attack on Titan</div></div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="row mb-4 mx-2">
            <a class="btn btn-success col me-1" href="https://open.spotify.com/playlist/2HbQZYH3hMnfCXfQFsCGtf?si=IVBISsSdROSPRaCkABNhPQ" target="_blank" rel="noopener noreferrer" role="button">Spotify Anime Songs Playlist</a>
            <a class="btn btn-success col ms-1" href="https://open.spotify.com/playlist/6Ausj8kCb9GQ43Bwmn8scN?si=sEHVbI2UTGSvg2RN35_NIQ" target="_blank" rel="noopener noreferrer" role="button">Spotify Anime OST Playlist</a>
          </div>
        </div>
      </div>
      <div class="row bg-2 text-white text-center t3 py-1" style={{height:"8%"}}>
        <div class="row justify-content-center">
          <div class="col-2"><a role="button" href="https://www.reddit.com/user/mihir_okte" target="_blank" rel="noopener noreferrer" class="text-white bg-2 text-center"><SocialIcon url="https://www.reddit.com/user/mihir_okte" bgColor="#7E1F86" fgColor="#ffffff" /></a></div>
          <div class="col-2"><a role="button" href="https://www.snapchat.com/add/mihir_okte" target="_blank" rel="noopener noreferrer" class="text-white bg-2 text-center"><SocialIcon url="https://www.snapchat.com/add/mihir_okte" bgColor="#7E1F86" fgColor="#ffffff" /></a></div>
          <div class="col-2"><a role="button" href="https://www.instagram.com/mihir_okte/" target="_blank" rel="noopener noreferrer" class="text-white bg-2 text-center"><SocialIcon url="https://www.instagram.com/mihir_okte/" bgColor="#7E1F86" fgColor="#ffffff" /></a></div>
          <div class="col-2"><a role="button" href="https://www.facebook.com/mihir.okte.3" target="_blank" rel="noopener noreferrer" class="text-white bg-2 text-center"><SocialIcon url="https://www.facebook.com/mihir.okte.3" bgColor="#7E1F86" fgColor="#ffffff"/></a></div>
          <div class="col-2"><a role="button" href="copy_id_from_url_to_send_invite_Mihir_Okte#7650" target="_blank" rel="noopener noreferrer" class="text-white bg-2 text-center"><Discord size={30} class="mt-2 pt-1" /></a></div>
        </div>
      </div>
    </div>
  );
  }
}
