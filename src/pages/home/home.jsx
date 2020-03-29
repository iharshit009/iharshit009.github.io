import React, { Component } from "react";
import Me from '../../static/projects/me.png'
import Me0 from '../../static/projects/me0.png'
import Me1 from '../../static/projects/me1.png'
import Me2 from '../../static/projects/me2.png'
import Me3 from '../../static/projects/me3.png'
import Me4 from '../../static/projects/me4.png'
// import Me5 from '../../static/projects/me5.png'
// import Me6 from '../../static/projects/me6.png'
// import Me7 from '../../static/projects/me7.png'
import "./home.scss";


// const imagesPath = {
//   Me: Me,
//   Me0: Me0,
//   Me1: Me1,
//   Me2: Me2,
//   Me3: Me3,
//   Me4: Me4,
//   // Me5 : "Me5",
//   // Me6: "Me6",
//   // Me7 : "Me7",
//   // Me8 : "Me8",
//   // Me9 : "Me9",
// }


export default class Home extends Component {
  state = {
    imageName: Me
  }


  toggleImage = () => {
    this.setState({ imageName: Me1 })
  }
  // getImageName = () => this.setState({imageName : }) 
  render() {
    return (
      <div className="home">
        {/* <img  src =  {Me} alt = "iharshit009" style = {{borderRadius : 9, margin : 30}}  /> */}

        <img className="my_image" style={{ borderRadius: 9, margin: 60, }} src={this.state.imageName} onClick={this.toggleImage} />
        <div className="home_name">
          Hello! This is Harshit Jain
          <br />
          I'm a Developer

        </div>
      </div>
    );
  }
}
