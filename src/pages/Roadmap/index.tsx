import { Etapa } from "@/@types/types";
import { Button } from "@/components/Button";
import RoadmapComponent from "@/components/RoadmapComponent";
// import ReadmapHistory from "@/components/RoadmapHistory";
import Add from "../../assets/add.svg";
import api, { apiAuth } from "@/service/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "@/components/LogOut";

export function Roadmap() {
  const navigation = useNavigate();
  // const [isLoading, setIsLoading] = useState(true);

  const [roadmapInfo, setRoadmapInfo] = useState<Etapa[]>([]);

  const handleRoadmapInfo = async () => {
    await api
      .post(`/v1/chat_chumbado`, {})
      .then((res) => {
        setRoadmapInfo(res.data.Etapas);
        console.log(res.data.Etapas);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGetRoadmapHistory = async (userId: string) => {
    await apiAuth.get(`v1/history/${userId}/user`).then((res) => {});
  };

  useEffect(() => {
    handleRoadmapInfo();
  }, []);

  return (
    <div className="flex flex-1 bg-background">
      {/* <ReadmapHistory /> */}
      <nav className="flex h-full p-2 bg-secondBackground fixed">
        <div className="flex flex-col gap-2 items-center">
          <div className="mt-5 ">
            <Button
              variant={"secondary"}
              onClick={() => navigation("/Interview")}
            >
              <img src={Add} />
            </Button>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <Button variant={"ghost"}>Lorem</Button>
            <Button variant={"ghost"}>Lorem</Button>
            <Button variant={"ghost"}>Lorem</Button>
          </div>
        </div>
      </nav>
      <LogOut />
      <RoadmapComponent roadmapInfo={roadmapInfo} />
    </div>
  );
}
