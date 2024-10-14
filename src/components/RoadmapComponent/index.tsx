import timelineElements from "../../../timelineElements.ts";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./styles.css";
import { theme } from "@/styles/theme";

function RoadmapComponent() {
  return (
    <VerticalTimeline className="">
      {timelineElements.map((element) => {
        return (
          <VerticalTimelineElement
            key={1}
            date={element.date}
            iconStyle={{ backgroundColor: theme.color.primary }}
            className=""
          >
            <h3 className="title">{element.title}</h3>
            <h5>{element.location}</h5>
            <p id="description"> {element.location}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export default RoadmapComponent;
