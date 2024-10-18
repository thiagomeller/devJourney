import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Interview");
  };

  return (
    <div className="flex flex-1 mt-48 justify-center">
      <div className="flex flex-col flex-1 bg-secondBackground justify-center rounded-sm px-28 max-w-[700px] py-32 max-h-96 gap-10">
        {/* <img src={"src/assets/logo.png"} className="" /> */}
        <Input placeholder="Usuário" />
        <Input placeholder="Senha" type="password" />
        <div className="flex flex-col gap-4 px-8">
          <Button onClick={handleNavigate}>Entrar</Button>
          <Button variant="secondary">Cadastrar-se</Button>
        </div>
      </div>
    </div>
  );
}
