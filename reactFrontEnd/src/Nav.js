// (c) Surien Das-Giwojno

import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/Nav.scss';
import { configureAnchors } from 'react-scrollable-anchor'
import { goToTop } from 'react-scrollable-anchor'



class MyNav extends Component {

  constructor(props) {
    super(props);
    this.state = { isActive: {} };
    this.isVisible = {};
  }

  


  makeActive(anchor) {
    this.isVisible[anchor] = true;
      // this.props.emit("active", {isActive});
      this.setState((state, props) => { 
        let isActive = state.isActive;
        if (Object.keys(isActive).length === 0  ){
          
          let isActive = {};//state.isActive;
        isActive[anchor] = true;
        return {isActive: isActive};
        } else{
          this.conflict = Object.keys(isActive)[0];
          isActive = {};
          isActive[anchor] = true;
         // goToAnchor(anchor, false);
          return {isActive: isActive};
        }
        
        
      });
    ;
  }



  disactivate(anchor) {
    
    delete this.isVisible[anchor];
    let isActive = {};
    if (this.conflict && this.conflict!==anchor && this.isVisible[this.conflict]){
      
      isActive[this.conflict] = true;
      this.setState((state, props) => { 
        
        return {isActive: isActive};
        
      });
    } else {
      if (Object.keys(this.isVisible).length === 0) {
        this.setState( {isActive: isActive});
      }
     
    }
    
  }
    
      
    

  setHeight() {

    const height = -this.divElement.offsetHeight;
    this.navOffset=height;
    configureAnchors({ offset: -window.innerHeight/3 +  height, scrollDuration: 200 ,keepLastAnchorHash: false})
  }
  componentDidMount() {

    this.setHeight();
    window.addEventListener("resize", this.setHeight.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeight.bind(this));
  }

  render() {
    
    return (

     
      <div className="sticky-top" ref={(divElement) => this.divElement = divElement}>
        <Navbar collapseOnSelect={true} id="custom" expand="lg" bg="black" variant="dark" sticky="top" >
          <Navbar.Brand id="custom" href="#home" onClick={goToTop}>
            {'GitHubHub'}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id="custom" className="ml-auto">
              <SmoothNavLink title="Statistics" active={this.state.isActive["Statistics"]}/>
              <SmoothNavLink title="GitHub Commits Chart" active={this.state.isActive["GitHub_Commits_Chart"]} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      

    )
  }
}



class SmoothNavLink extends Component {
  constructor(props){
    super(props);
    this.hrefLink = this.props.title.split(' ').join('_');
  }
  
  render() {
    
    let hrefLink = this.hrefLink;
    return (
       <Nav.Link href={"#" + hrefLink} active={this.props.active ? true : false}>
          {this.props.title}
      </Nav.Link>
    )
  }

}




export default MyNav;
