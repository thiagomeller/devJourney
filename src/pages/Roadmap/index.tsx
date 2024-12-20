import { Etapa, RoadmapHistory } from "@/@types/types";
import { Button } from "@/components/Button";
import RoadmapComponent from "@/components/RoadmapComponent";
// import ReadmapHistory from "@/components/RoadmapHistory";
import Add from "../../assets/add.svg";
import api from "@/service/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "@/components/LogOut";

export function Roadmap() {
  const configAxiosRequest = {
    headers: {
      Authorization: localStorage.getItem("authTOken")
    },
  };

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [roadmapInfo, setRoadmapInfo] = useState<Etapa[]>([]);

  const [roadmapHistory, setRoadmapHistory] = useState<RoadmapHistory[]>([]);

  const handleRoadmapInfo = async () => {
    setIsLoading(true);

    await api
      .post(`/v1/chat_chumbado`, {}, configAxiosRequest)
      .then((res) => {
        setRoadmapInfo(res.data.etapas);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleGetRoadmapHistory = async () => {
    await api
      .get(`/v1/history`, configAxiosRequest)
      .then((res) => {
        setRoadmapHistory(res.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  const updateRoadmap = async (id: number) => {
    setIsLoading(true);

    await api
      .get(`/v1/history/${id}`, {})
      .then((res) => {
        setRoadmapInfo(res.data.etapas);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    handleRoadmapInfo();
    handleGetRoadmapHistory();
  }, [navigate]);

  return (
    <div className="flex flex-1 bg-background">
      {/* <ReadmapHistory /> */}
      <nav className="flex h-full p-2 bg-secondBackground fixed z-10 min-[1370px]:flex">
        <div className="flex flex-col gap-2 items-center">
          <div className="mt-5 ">
            <Button
              variant={"secondary"}
              onClick={() => navigate("/Interview")}
            >
              <img src={Add} />
              <p className="hidden !text-white mr-2 min-[1600px]:flex">
                Gerar novo
              </p>
            </Button>
          </div>
          {roadmapHistory && roadmapHistory.length > 0 && (
            <div className="flex flex-col flex-1 justify-center max-w-[80px] min-[1600px]:max-w-[224px]">
              {roadmapHistory.map((roadmap, index) => {
                return (
                  <Button
                    key={index}
                    variant={"ghost"}
                    type="button"
                    onClick={() => updateRoadmap(roadmap.id)}
                    // setRoadmapInfo(roadmap.id)
                  >
                    <div className="inline-block overflow-hidden overflow-ellipsis">
                      {roadmap.title}
                    </div>
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </nav>
      <LogOut />
      {!isLoading && <RoadmapComponent roadmapInfo={roadmapInfo} />}
    </div>
  );
}
