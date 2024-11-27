import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Toaster } from "@/components/Toast/toaster";
import { useToast } from "@/hooks/use-toast";
import api from "@/service/api";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const user = useRef<string>("");
  const password = useRef<string>("");

  useEffect(() => {
    const token = localStorage.getItem("authTOken");
    if (token) {
      navigate("/Interview");
    }
  }, [navigate]);

  const handleNavigate = async () => {
    await api
      .post(
        "/v1/authenticate",
        {},
        {
          headers: {
            Authorization:
              "Basic " + window.btoa(`${user.current}:${password.current}`),
          },
        }
      )
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("authTOken", res.data.token);
          navigate("/Roadmap");
        }
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Erro ao realizar login",
          description: "Login ou senha incorretos",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col bg-secondBackground rounded-sm p-10 max-w-md w-full gap-6">
        <img
          src={"src/assets/logo.svg"}
          alt="Logo"
          className="self-center w-40"
        />

        <Input
          name="usuario"
          placeholder="Usuário"
          onChange={(evt) => (user.current = evt.target.value)}
        />
        <Input
          name="password"
          placeholder="Senha"
          type="password"
          onChange={(evt) => (password.current = evt.target.value)}
        />

        <div className="flex flex-col gap-4 mt-6 w-full">
          <Button onClick={handleNavigate}>Entrar</Button>
          <Button variant="secondary" onClick={() => navigate("/SignUp")}>
            Cadastrar-se
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
