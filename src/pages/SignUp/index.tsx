import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useToast } from "@/hooks/use-toast";
import api from "@/service/api";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      handleCreateUser(values);
    },
  });

  const handleCreateUser = async (values: typeof formik.initialValues) => {
    await api
      .post("/v1/users", values)
      .then(() => {
        toast({
          title: "Conta criada com sucesso!",
          description: "Pode logar na sua conta",
        });

        navigate(-1);
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Erro ao criar conta",
          description: "Não foi possível criar a conta, tente novamente",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col bg-secondBackground justify-center items-center rounded-sm px-10 py-12 max-w-md w-full gap-8">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-6 w-full items-center"
        >
          <img src={"src/assets/logo.svg"} alt="Logo" className="w-40" />

          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full"
          />
          <Input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full"
          />
          <Input
            id="name"
            name="name"
            placeholder="Nome Completo"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full"
          />
          <Input
            id="password"
            name="password"
            placeholder="Senha"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full"
          />

          <div className="flex flex-col gap-4 w-full mt-6">
            <Button type="submit">Cadastrar</Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Voltar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
