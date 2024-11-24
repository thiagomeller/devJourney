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
            key={element.etapa}
            //date={element.date}
            iconStyle={{ backgroundColor: theme.color.primary }}
            className=""
          >
            <h3 className="title">{element.etapa}</h3>
            {element.recursos.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div>
                  <h6 className="inline italic">{item.tipo}: </h6>
                  <a href={item.link}>{item.titulo}</a>
                  <a href={item.link}>{item.nome}</a>
                </div>
              </div>
            ))}
            <p id="description">
              Tempo de estudo semanal: {element.tempoEstudoSemanal}
            </p>
            <p id="description">Duração total: {element.duracaoTotal}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export default RoadmapComponent;
