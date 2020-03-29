import React, { Component } from "react";
import Me from '../../static/projects/me.png'
import Me0 from '../../static/projects/me0.png'

import Me4 from '../../static/projects/me4.png'

import "./home.scss";



export default class Home extends Component {
  state = {
    count: 0,
    imageName: Me
  }


  toggleImage = () => {
    this.setState({ count: this.state.count + 1 })
    switch (this.state.count) {
      case 0:

        this.setState({ imageName: Me0 })
        break

      case 1:
        this.setState({ imageName: Me4 })

    }
    if (this.state.count == 1) {
      this.setState({ count: 0 })
    }
  }

  render() {
    return (
      <div className="home">

        <img className="my_image" style={{ borderRadius: 9, margin: 60, height: 330 }} src={this.state.imageName} onClick={this.toggleImage} />
        <div className="home_name">
          Hello! This is Harshit Jain
          <br />
          I'm a Developer

        </div>
      </div>
    );
  }
}
