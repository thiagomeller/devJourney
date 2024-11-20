import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

const LogOut = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("authTOken");

  const logOut = () => {
    localStorage.clear();
    navigate(`/`);
  };

  return (
    <div className={`absolute top-5 right-5 ${isLogged ? "flex" : `hidden`}`}>
      <Button type="button" onClick={() => logOut()}>
        Sair
      </Button>
    </div>
  );
};

export default LogOut;
