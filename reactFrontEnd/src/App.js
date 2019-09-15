// (c) Surien Das-Giwojno

import React, { Component } from 'react';
import './css/App.scss';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Chart from './Chart';
import Graph from './Graph';
//import TypeWriter from './TypeWriter';
import MyNav from './Nav';
import Particles from 'react-particles-js';
import particleConfig from './particleConfig';
import ScrollableAnchor from 'react-scrollable-anchor';
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import Popup from 'react-popup';
import $ from 'jquery';




const links = {
  terrible: "",
  bad: "",
  okay: "",
  good: ""
}

const baseURL = "http://localhost:2525"

let myNav;
//let cardsElem;

function Cards() {


  return (


    <CardDeck>
      <Card id="custom" bg="dark" text="white">
        <Card.Header><Card.Title>UOttaHacks</Card.Title></Card.Header>
        <Card.Img id="cardImg" variant="top" src="uOttaHacks.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card bg="dark" text="white">
        <Card.Header><Card.Title>Hack the North</Card.Title></Card.Header>
        <Card.Img id="cardImg" variant="top" src="HackTheNorth.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card bg="dark" text="white">
        <Card.Header><Card.Title>Hack the North</Card.Title></Card.Header>
        <Card.Img id="cardImg" variant="top" src="HackTheNorth.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>



    </CardDeck>)
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { top: window.innerHeight / 2, bottom: window.innerHeight / 2 , cyclo:"yellowcircle.png", maint:"yellowcircle.png", hal: "", raw:"", data:[]};
  }

  handleUserUpdate(event){
    if (event.key === 'Enter'){
      this.updatePhoto(event.target.value);
      let username = event.target.value;

      this.setState((state) => {
        let data = [];
        $.getJSON(`http://localhost:2525/stats/piechart/${username}`, (json) => {
          for (const key in json) {
            data.push({ name: key, value: json[key] });
          }
          data = data.sort((a, b) => (a.value > b.value) ? 1 : -1)
          // console.log(data)
          this.setState({data});
        });
      })

      this.updateScales(event.target.value);
    }
  }

  updatePhoto(username) {
  

      axios.get(baseURL + "/avatar/" + username).then(res => {
        console.log(res.data);
        this.setState({profilePic: res.data, name: username});
      }).catch(error =>
        {
          Popup.alert('User not found');
          
        })
    
    
    
  }

  updateScales(username){
    axios.get(baseURL + "/download/repolist/" + username).then(res => {
      console.log(res.data);
      console.log(res.data)
      console.log(res.data["average_mi"])
      console.log(typeof(res.data))
      
      if (res.data["Average complexity"]=="A"){
        this.setState({cyclo: "greenCircle.png"});
      }
      else if (res.data["Average complexity"]=="B"){
        this.setState({cyclo: "yellowcircle.png"});
      }
      else if (res.data["Average complexity"]=="C"){
        this.setState({cyclo: "yellowcircle.png"});
      }
      else{
        this.setState({cyclo: "redcircle.png"});
      }

      if (res.data["average_mi"]=="A"){
        this.setState({maint: "greenCircle.png"});
      }
      if (res.data["average_mi"]=="B"){
        this.setState({maint: "yellowcircle.png"});
      }
      if (res.data["average_mi"]=="C"){
        this.setState({maint: "yellowcircle.png"});
      }
      else{
        this.setState({maint: "redcircle.png"});
      }
    }).catch(error =>
      {
        Popup.alert('User not found');
        
      })
  }

  updateWindowOffset() {
    this.setState({ top: window.innerHeight / 2, bottom: window.innerHeight / 2 });

  }
  componentDidMount() {
    window.addEventListener('resize', this.updateWindowOffset.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowOffset.bind(this));
  }

  render() {
    console.log("app rendered");
    return (

     



      <div className="App">
         <Popup />

        <MyNav ref={(navElement) => myNav = navElement} />

        <div className="mainBackground">
          <Particles className='particles'
            params={particleConfig} />

          

          <MainImage id="mainImage" src={this.state.profilePic} />
          <br></br>
          <Container id = "inputBar">
          <InputGroup className="mb-3" >
            <InputGroup.Prepend>
              <InputGroup.Text id="input">GitHub Username</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            id = "inputBar"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onKeyDown={this.handleUserUpdate.bind(this)}
            />
          </InputGroup>
            <Row>
              <Col>
                <MediaImage src={this.state.maint} link={links.terrible} />
                <p>Maintainability Index</p>
              </Col>
              <Col>
                <MediaImage src={this.state.cyclo} link={links.bad} />
                <p>Cyclomatic Complexity</p>
              </Col>
              {/*
              <Col>
                <MediaImage src={this.state.raw}link={links.okay} />
                <p>Raw Metrics</p>
              </Col>
              <Col>
                <MediaImage src={this.state.hal} link={links.good} />
                <p>Halstead Metrics</p>
              </Col>
              */}
              
            </Row>
          </Container>
        </div>





        <VisibilitySensor partialVisibility offset={this.state} scrollDelay={0} scrollCheck={true} onChange={(isVisible) => {
          isVisible ? myNav.makeActive("Statistics") : myNav.disactivate("Statistics");
        }}>
          <div id="StatisticsDiv">
            {/*console.log(cardsElem ? cardsElem.offsetHeight : 0)*/}

            <ScrollableAnchor id={'Statistics'}>
              <h2>  Statistics </h2>
            </ScrollableAnchor>

              <Chart data={this.state.data}/>
            
          </div>
        </VisibilitySensor>


        <VisibilitySensor partialVisibility offset={this.state} scrollDelay={0} scrollCheck={true} onChange={(isVisible) => {

          isVisible ? myNav.makeActive("GitHub_Commits_Chart") : myNav.disactivate("GitHub_Commits_Chart")
        }}>
          <div id="GitHub_Commits_ChartDiv">

            <ScrollableAnchor id={'GitHub_Commits_Chart'}>
              <h2>  GitHub Commits Chart </h2>
            </ScrollableAnchor>

            <Cards />

          </div>
        </VisibilitySensor>

        
        {/* <Graph/> */}
      </div>
    );
  }
}


class MainImage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Image src={this.props.src} id={this.props.id} roundedCircle />
          </Col>
        </Row>
      </Container>
    )
  }
}

class MediaImage extends Component {
  render() {
    return (
      <a
        className="App-link"
        href={this.props.link}
        target="_blank"
        rel="noopener noreferrer">

        <Image src={this.props.src} id="mediaImage" roundedCircle />
      </a>
    )
  }
}
export default App;
