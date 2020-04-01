import React, { Component } from "react";
import "./projects.scss";
import Ovuli from "../../static/projects/ovuli.png";
import Naarad from "../../static/projects/naarad.png";
import FaunaNation from "../../static/projects/faunanation.png";
import Codefoster from "../../static/projects/codefoster.png";
import Roll from 'react-reveal/Roll'
import Slide from 'react-reveal/Slide';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Roll left>


          <div className="projects_unit">
            <img className="project_image" src={Ovuli} alt="Ovuli" />

            <div className="project_details">
              <div className="project_title">Ovuli</div>

              <div className="project_description">
                A simple Native App that allows you to see when you may be ovulating to help find your most fertile days. Menstrual periods are different from woman to woman and month to month.This App cannot and should not be used to prevent pregnancy. Results are estimates and actual ovulation will vary for each woman.</div>

              <div className="project_links">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/iharshit009/ovuli"
                >
                  <button> Code</button>
                </a>
                {/* b<button> Code </button> */}
              </div>
            </div>
          </div>

        </Roll>

        <Slide top>
          <div className="projects_unit">
            <img className="project_image" src={Codefoster} alt="Codefoster" />
            <div className="project_details">
              <div className="project_title">Codefoster </div>

              <div className="project_description">
                Codefoster is the official central coding club of SGSITS. CodeFoster is the campus chapter of CodeChef and the only Raspberry Jam of central India.
            </div>

              <div className="project_links">

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://codefostergs.github.io/Website/"
                >
                  <button> Visit</button>
                </a>

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/iharshit009/Website"
                >
                  <button> Code </button>
                </a>
              </div>
            </div>
          </div>
        </Slide>
        <Slide bottom >
          <div className="projects_unit">
            <img className="project_image" src={FaunaNation} alt="FaunaNation" />
            <div className="project_details">
              <div className="project_title">FaunaNation</div>

              <div className="project_description">
                FaunaNation is a "Build For Digital India" Initiative to Care, Enrich and Enhance the Current Scenrio of Flora and Fauna... This is a Project Build Under The Design Institute(TDi) where I with my team worked on the project for 4 month of Timespan
            </div>

              <div className="project_links">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://thedesigninstitute.in/"
                >
                  <button> Visit</button>
                </a>


              </div>
            </div>
          </div>
        </Slide>
        <Roll right >
          <div className="projects_unit">
            <img className="project_image" src={Naarad} alt="Naarad" />
            <div className="project_details">
              <div className="project_title">Naarad </div>

              <div className="project_description">
                An easier way to reach more with less on Facebook
                The chivalrous messenger god is here to reduce your burden of Digital Publicity of your college events in facebook groups.
            </div>

              <div className="project_links">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/iharshit009/naarad/"
                >
                  <button> Visit</button>
                </a>
                {/* b<button> Code </button> */}
              </div>
            </div>
          </div>
        </Roll>
      </div>
    );
  }
}
