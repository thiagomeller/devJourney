import timelineElements from "E:/Facul/ProjetoIA/devJourney/timelineElements.js";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "E:/Facul/ProjetoIA/devJourney/src/components/RoadmapComponent/styles.css";

function RoadmapComponent() {
  const workIconStyles = { background: "#06D6A0" };
  const schoolIconStyles = { background: "#f9c74f" };

  return (
    <VerticalTimeline className="h-1/2">
      {timelineElements.map((element) => {
        const isWorkIcon = element.icon === "work";

        return (
          <VerticalTimelineElement
            key={1}
            date={element.date}
            iconStyle={schoolIconStyles}
            className="h-1/2"
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h5 className="vertical-timeline-element-subtitle">
              {element.location}
            </h5>
            <p id="description"> {element.location}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export default RoadmapComponent;
