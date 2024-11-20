import { useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import LogOut from "@/components/LogOut";
import Select from "@/components/Select";
import { apiAuth } from "@/service/api";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export function Interview() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState<File | null>(null);

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

  const handleUploadPDF = async () => {
    if (!file) {
      alert("Selecione um arquivo para enviar.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await apiAuth.post("v1/upload_pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
      setShowModal(false); // Fecha o modal após o envio
    } catch (error) {
      alert("Erro ao enviar o arquivo.");
    }
  };

  return (
    <div className="flex flex-1 h-full justify-center">
      <LogOut />
      <div className="flex flex-col items-center justify-center bg-secondBackground rounded-sm px-6 py-10 min-w-[700px] gap-10">
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

            <div className="flex flex-col gap-6 justify-center mb-6">
              <div className="flex flex-col">
                <label className="block">Tempo para a conclusão</label>
                <div className="flex gap-2">
                  <div className="flex flex-1">
                    <Input
                      id="tempoMaximoNumero"
                      name="tempoMaximoNumero"
                      placeholder="Quantidade"
                      value={formik.values.tempoMaximoNumero}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
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
                  <div className="flex flex-1">
                    <Input
                      id="tempoMedioNumero"
                      name="tempoMedioNumero"
                      placeholder="Quantidade"
                      value={formik.values.tempoMedioNumero}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
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
          <Button variant="secondary" onClick={() => setShowModal(true)}>
            Upload PDF
          </Button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h2 className="text-2xl font-semibold mb-4">Upload de PDF</h2>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mb-4"
            />
            <div className="flex justify-end gap-4">
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancelar
              </Button>
              <Button onClick={handleUploadPDF}>Enviar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
