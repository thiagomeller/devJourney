import RoadmapComponent from "@/components/RoadmapComponent";
import ReadmapHistory from "@/components/RoadmapHistory";

export function Roadmap() {
  return (
    <div className="flex bg-secondBackground">
      <ReadmapHistory />
      <RoadmapComponent />
    </div>
  );
}
