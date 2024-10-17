import { Etapa } from "@/@types/types";
import RoadmapComponent from "@/components/RoadmapComponent";
import ReadmapHistory from "@/components/RoadmapHistory";
import api from "@/service/api";
import { useEffect, useState } from "react";

export function Roadmap() {
  const [isLoading, setIsLoading] = useState(true);

  const [roadmapInfo, setRoadmapInfo] = useState<Etapa[]>([]);

  const handleRoadmapInfo = async () => {
    await api
      .post("http://127.0.0.1:5000/v1/chat_chumbado", {})
      .then((res) => {
        setRoadmapInfo(res.data.Etapas);
        console.log(res.data.Etapas);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleRoadmapInfo();
  }, []);

  return (
    <div className="flex bg-secondBackground">
      <ReadmapHistory />
      <RoadmapComponent roadmapInfo={roadmapInfo} />
    </div>
  );
}
