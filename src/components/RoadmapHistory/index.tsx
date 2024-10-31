import { Button } from "../Button";
import Add from "../../assets/add.svg";
import { useNavigate } from "react-router-dom";

export default function ReadmapHistory() {
  const navigation = useNavigate();

  return (
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
  );
}
