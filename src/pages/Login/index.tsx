import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import api from "@/service/api";
import { useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem('authTOken');
    if (token) {
      navigate("/Interview");
    }
  }, [])

  const handleNavigate = async () => {
    await api
    .post("http://127.0.0.1:5000/v1/authenticate", {}, {
      headers: {
        Authorization: "Basic " + window.btoa("juliano2:123456")
      }
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem('authTOken', res.data.token);
        navigate("/Interview");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col bg-secondBackground rounded-sm p-10 max-w-md w-full gap-6">
        <img src={"src/assets/logo.svg"} alt="Logo" className="self-center w-40" />
        
        <Input name="usuario" placeholder="Usuário" />
        <Input name="password" placeholder="Senha" type="password" />
        
        <div className="flex flex-col gap-4 mt-6 w-full">
          <Button onClick={handleNavigate}>Entrar</Button>
          <Button variant="secondary">Cadastrar-se</Button>
        </div>
      </div>
    </div>

  );
}
