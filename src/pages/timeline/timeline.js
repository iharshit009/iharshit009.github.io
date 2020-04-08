import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "../../static/projects/icons8-laptop-50.png";
import AppleIcon from "../../static/projects/icons8-laptop-64.png";
import SchoolIcon from "../../static/projects/icons8-medium-charging-battery-48.png";
import { UserContext } from "./UserProvider";
import { auth } from "../../firebase";

export default Timelinen;

const Timelinen = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;

  return (
    <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <div
          style={{
            background: `url(${
              photoURL ||
              "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
            })  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
          className="border border-blue-300"
        ></div>
        <div className="md:pl-4">
          <h2 className="text-2xl font-semibold">{displayName}</h2>
          <h3 className="italic">{email}</h3>
        </div>
      </div>
      <button
        className="w-full py-3 bg-red-600 mt-4 text-white"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

// export default class Timelinen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: null
//     };
//   }

//   render() {
//     return (
//       <VerticalTimeline>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//         //   date="2011 - present"
//           date={this.state.date}
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           // icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Creative Director</h3>
//           <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//           <p>
//             Creative Direction, User Experience, Visual Design, Project
//             Management, Team Leading
//           </p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2010 - 2011"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           // icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Art Director</h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             San Francisco, CA
//           </h4>
//           <p>
//             Creative Direction, User Experience, Visual Design, SEO, Online
//             Marketing
//           </p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2008 - 2010"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           // icon={<AppleIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Web Designer</h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             Los Angeles, CA
//           </h4>
//           <p>User Experience, Visual Design</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2006 - 2008"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           // icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Web Designer</h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             San Francisco, CA
//           </h4>
//           <p>User Experience, Visual Design</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="April 2013"
//           iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//           // icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//             Content Marketing for Web, Mobile and Social Media
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//           <p>Strategy, Social Media</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="November 2012"
//           iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//           // icon={<AppleIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//             Agile Development Scrum Master
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//           <p>Creative Direction, User Experience, Visual Design</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="2002 - 2006"
//           iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//           // icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//             Bachelor of Science in Interactive Digital Media Visual Imaging
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             Bachelor Degree
//           </h4>
//           <p>Creative Direction, Visual Design</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
//           // icon={<WorkIcon />}
//         />
//       </VerticalTimeline>
//     );
//   }
// }
