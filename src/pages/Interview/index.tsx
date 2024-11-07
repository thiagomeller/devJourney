import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Select from "@/components/Select";
import api, { apiAuth } from "@/service/api";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export function Interview() {
  const navigate = useNavigate();
  const cargos = ["Desenvolvedor", "Analista de Sistemas", "Testador"];
  const techs = ["Python", "Java", "Javascript"];
  const studyMethods = ["Vídeos", "Livros", "Vídeos e livros"];
  const endTime = ["Mes(es)", "Ano(s)"];
  const averageStudyTime = ["minuto(s)", "hora(s)"];

  const formik = useFormik({
    initialValues: {
      cargo: "",
      tecnologia: "",
      tempoMaximoNumero: "",
      tempoMaximoTipo: "",
      tempoMedioNumero: "",
      tempoMedioTipo: "",
      formatoEstudos: "",
    },
    onSubmit: (values) => {
      console.log(values);
      handleCreateRoadmap(values);
    },
  });

  const handleCreateRoadmap = async (values: typeof formik.initialValues) => {
    const chatToken = import.meta.env.VITE_CHAT_TOKEN;

    await apiAuth
      .post(`v1/chat?token=${chatToken}`, values)
      .then((res) => {
        alert(res.data.message);
        navigate("/Roadmap");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="flex flex-1 h-full justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-secondBackground rounded-sm px-6 py-10 max-w-lg w-full gap-10">
        <h1 className="text-3xl font-semibold text-center text-white mb-10">
          Monte sua jornada
        </h1>
        <div className="flex flex-1 w-full px-6">
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="flex flex-col gap-6 mb-6">
              <Select
                id="cargo"
                name="cargo"
                label="Selecione o cargo desejado:"
                options={cargos}
                onChange={formik.handleChange}
              />
              <Select
                id="tecnologia"
                name="tecnologia"
                label="Selecione a tecnologia desejada:"
                options={techs}
                onChange={formik.handleChange}
              />
              <Select
                id="formatoEstudos"
                name="formatoEstudos"
                label="Tipo de estudo:"
                options={studyMethods}
                onChange={formik.handleChange}
              />
            </div>
    
            <div className="flex flex-col gap-6 items-center justify-center mb-6">
              <div className="flex flex-col">
                <label className="block">Tempo para a conclusão</label>
                <div className="flex gap-2">
                  <Input
                    id="tempoMaximoNumero"
                    name="tempoMaximoNumero"
                    placeholder="Quantidade"
                    value={formik.values.tempoMaximoNumero}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Select
                    id="tempoMaximoTipo"
                    name="tempoMaximoTipo"
                    options={endTime}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
    
              <div className="flex flex-col">
                <label className="block">Tempo médio de estudo</label>
                <div className="flex gap-2">
                  <Input
                    id="tempoMedioNumero"
                    name="tempoMedioNumero"
                    placeholder="Quantidade"
                    value={formik.values.tempoMedioNumero}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Select
                    id="tempoMedioTipo"
                    name="tempoMedioTipo"
                    options={averageStudyTime}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>
    
            <div className="flex justify-center items-center">
              <Button type="submit">Gerar jornada</Button>
            </div>
          </form>
        </div>
    
        <div className="flex flex-col items-center px-6 my-10">
          <label className="block text-center">
            ou faça um upload do seu currículo (formato PDF)
          </label>
          <Button variant="secondary">Upload PDF</Button>
        </div>
      </div>
    </div>
  );
}
