import { Button } from "../Button";
import Add from "../../assets/add.svg";

export default function ReadmapHistory() {
  return (
    <nav className="flex h-full p-2 bg-background fixed">
      <div className="flex flex-col gap-2 items-center">
        <div className="mt-5 ">
          <Button variant={"secondary"}>
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
