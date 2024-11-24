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
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [roadmapInfo, setRoadmapInfo] = useState<Etapa[]>([]);

  const handleRoadmapInfo = async () => {
    setIsLoading(true);
    const chatToken = localStorage.getItem("authTOken");

    await api
      .post(`/v1/chat_chumbado?token=${chatToken}`, {})
      .then((res) => {
        setRoadmapInfo(res.data.etapas);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleGetRoadmapHistory = async () => {
    const chatToken = localStorage.getItem("authTOken");
    await apiAuth
      .get(`v1/history?token=${chatToken}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    handleRoadmapInfo();
    handleGetRoadmapHistory();
  }, [navigate]);

  return (
    <div className="flex flex-1 bg-background">
      {/* <ReadmapHistory /> */}
      <nav className="flex h-full p-2 bg-secondBackground fixed">
        <div className="flex flex-col gap-2 items-center">
          <div className="mt-5 ">
            <Button
              variant={"secondary"}
              onClick={() => navigate("/Interview")}
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
      {!isLoading && <RoadmapComponent roadmapInfo={roadmapInfo} />}
    </div>
  );
}
