import React, { Component } from "react";
import "./about.scss";
import Heading from "../../components/heading/heading";
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';


export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-desc">

          <div className="about-head">About Me</div>
          <Zoom top>
            I am an avid open-source developer pursuing my Bachelors at Shri Govindram Seksaria Institute of Technology and Science. I am interested in the field of Mobile Development,
            Backend Development & Problem Solving & I love working on projects which
            simplifies lives. I've worked with various diverse development web and Mobile Products .
          <br />
            <br />
            <br />
          </Zoom>
          <div className="about-head">Connect</div>
          <Bounce left>
            <div>
              <a className="about-connect-link" href="mailto:harshitjain1309@gmail.com">
                <i class="fas fa-envelope" /> harshitjain1309@gmail.com
            </a>

              <a
                target="_blank"
                className="about-connect-link"
                rel="noopener noreferrer"
                href="https://github.com/iharshit009/"
              >
                <i class="fab fa-github" /> Github
            </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.linkedin.com/in/iharshit009/"
                className="about-connect-link"
              >
                <i class="fab fa-linkedin-in" /> Linkedin
            </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.medium.com/@iharshit009/"
                className="about-connect-link"
              >
                <i class="fab fa-medium" /> Medium
            </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.twitter.com/iharshit009/"
                className="about-connect-link"
              >
                <i class="fab fa-twitter" /> Twitter
            </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.gitlab.com/iharshit009/"
                className="about-connect-link"
              >
                <i class="fab fa-gitlab" /> Gitlab
            </a> <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.instagram.com/iharshit009/"
                className="about-connect-link"
              >
                <i class="fab fa-instagram" /> Instagram
            </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.quora.com/Harshit-Jain-160/"
                className="about-connect-link"
              >
                <i class="fab fa-quora" /> Quora
            </a>
              <a className="about-connect-link"
                href="tel:9479756888"
              >
                <i class="fas fa-phone" /> (+91) 94797 56888
            </a>

            </div>
          </Bounce>
        </div>


        <div className="about-skills">
          <div className="about-head">Skills</div>
          <Rotate bottom right>
            <Heading>Languages</Heading>

            <div className="about-desc">
              JavaScript, Python, C++
          </div>

            <br />
            <Heading>FrontEnd</Heading>
            <div className="about-desc">
              React, Redux, React Native,
          </div>

            <br />
            <Heading>BackEnd</Heading>
            <div className="about-desc">Django, Django Rest Framework, Firebase, Firebase Store</div>

            <br />
            <Heading>Operating Systems</Heading>
            <div className="about-desc">Ubuntu, MacOS</div>

            <br />
            <Heading>DevOps</Heading>
            <div className="about-desc">
              Infrastructure as a Code, GitLab-CI, Husky, ESLint
          </div>

            <br />
            <Heading>Databases</Heading>
            <div className="about-desc">SQLite, MongoDB</div>
          </Rotate>
        </div>


      </div>
    );
  }
}

