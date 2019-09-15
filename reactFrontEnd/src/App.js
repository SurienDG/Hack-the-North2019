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
    this.state = { top: window.innerHeight / 2, bottom: window.innerHeight / 2 };
  }

  handleUserUpdate(event){
    if (event.key === 'Enter'){
      this.updatePhoto(event.target.value);

    }
  }

  updatePhoto(username) {
  

      axios.get(baseURL + "/avatar/" + username).then(res => {
        console.log(res.data);
        this.setState({profilePic: res.data});
      }).catch(error =>
        {
          Popup.alert('User not found');
          
        })
    
    
    //this.setState({});
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
      
          </Container>
   
          
          
          <span>Your coding style is very good!</span>
          <Container>
            <Row>
              <Col>
                <MediaImage src="greenCircle.png" link={links.terrible} />
                <MediaImage src="greenCircle.png" link={links.bad} />
                <MediaImage src="greenCircle.png" link={links.okay} />
                <MediaImage src="greenCircle.png" link={links.good} />
              </Col>
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

              <Chart/>

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
