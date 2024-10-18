import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./styles.css";
import { theme } from "@/styles/theme";
import { Etapa } from "@/@types/types.ts";

interface RoadmapComponentProps {
  roadmapInfo: Etapa[];
}

function RoadmapComponent({ roadmapInfo }: RoadmapComponentProps) {
  return (
    <VerticalTimeline className="flex flex-col h-full">
      {roadmapInfo.map((element) => {
        return (
          <VerticalTimelineElement
            key={element.Etapa}
            //date={element.date}
            iconStyle={{ backgroundColor: theme.color.primary }}
            className=""
          >
            <h3 className="title">{element.Etapa}</h3>
            {element.Recursos.map((item) => (
              <div key={item.Título} className="flex flex-col gap-4">
                <div>
                  <h6 className="inline italic">{item.Tipo}: </h6>
                  <a href={item.Link}>{item.Título}</a>
                  <a href={item.Link}>{item.Nome}</a>
                </div>
              </div>
            ))}
            <p id="description">
              Tempo de estudo semanal: {element.TempoEstudoSemanal}
            </p>
            <p id="description">Duração total: {element.DuracaoTotal}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export default RoadmapComponent;
