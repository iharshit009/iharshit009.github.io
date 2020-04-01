import React, { Component } from "react";
import Me from '../../static/projects/me.png'
import Me0 from '../../static/projects/me0.png'
import LightSpeed from 'react-reveal/LightSpeed';
import Me4 from '../../static/projects/me4.png'
import subscribe from '../../static/projects/subscribe.png'
import "./home.scss";
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import ReactTypingEffect from 'react-typing-effect';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      imageName: Me,
      count: 0,
      txt: 'hellp'
    }

  }

  handleClick = () => {
    this.setState({ show: !this.state.show })

  }

  toggleImage = () => {
    this.setState({ count: this.state.count + 1 })
    switch (this.state.count) {
      case 0:
        this.setState({ imageName: Me0 })
        break
      case 1:
        this.setState({ imageName: Me4 })
        break
    }
    if (this.state.count == 1) {
      this.setState({ count: 0 })
    }
  }

  render() {
    return (
      <div className="home">
        <LightSpeed left opposite cascade collapse when={this.state.show} onClick={this.toggleImage}>
          <img className="my_image" style={{ borderRadius: 9, margin: 60, height: 300 }} src={this.state.imageName} onClick={this.toggleImage} />
        </LightSpeed>
        <div className="home_name">
          <Rotate top left>
            <h3>Hello! This is Harshit Jain</h3>
          </Rotate >
          <Rotate bottom right>

            <ReactTypingEffect speed="150" eraseDelay="-10" typingDelay="10" text="Developer | Programmer | open-source Contributor" />
          </Rotate>
          <Zoom bottom >
            <img className="my" style={{ borderRadius: 15, margin: 5, height: 60 }} src={subscribe} onClick={this.handleClick} />
          </Zoom>
        </div>
      </div>
    );
  }
}
