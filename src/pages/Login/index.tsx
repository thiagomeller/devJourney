import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useNavigate } from 'react-router-dom';


export function Login() {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/Interview'); 
  };


  return (
    <>
      <div className="flex flex-col bg-secondBackground items-center justify-center rounded-sm px-28 py-32 max-w-screen-sm max-h-96 gap-10">
        {/* <img src={"src/assets/logo.png"} className="" /> */}
        <Input placeholder="Usuário" />
        <Input placeholder="Senha" type="password" />
        <div className="flex flex-col gap-4 px-8">
          <Button onClick={handleNavigate}>Entrar</Button>
          <Button variant="secondary">Cadastrar-se</Button>
        </div>
      </div>
    </>
  );
}


