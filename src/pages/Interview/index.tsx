import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import LogOut from "@/components/LogOut";
import { Combobox } from "@/components/Combobox";
import Select from "@/components/Select";
import { apiAuth } from "@/service/api";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Loading from "@/components/Loading/Loading";

export function Interview() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const configAxiosRequest = {
    headers: {
      Authorization: localStorage.getItem("authTOken")
    },
  };
  // const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      handleCreateRoadmap(values);
    },
  });

  const handleCreateRoadmap = async (values: typeof formik.initialValues) => {
    setIsLoading(true);
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(
        key,
        values[key as keyof typeof formik.initialValues] || ""
      );
    });

    if (file) {
      formData.append("pdf", file);
    }

    await apiAuth
      .post(`v1/chat`, values, configAxiosRequest)
      .then(() => {
        navigate("/Roadmap");
      }).catch(() => {
        toast({
          variant: "destructive",
          title: "Erro ao criar roadmap",
          description: "Espere um pouco e tente novamente",
        });
      }).finally(() => setIsLoading(false));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    } else {
      alert("Por favor, envie um arquivo PDF.");
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Por favor, envie um arquivo PDF.");
    }
  };

  const handleAreaClick = () => {
    fileInputRef.current?.click();
  };


  const handleIsAuthenticated = async () => {
    await apiAuth
      .get(`/v1`, configAxiosRequest)
      .then((res) => {
      })
      .catch((error) => {
        if (error.status === 401) {
          localStorage.clear();
          navigate(`/`);
        }
      });
  };

  useEffect(() => {
    handleIsAuthenticated();
  }, []);

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
              <Combobox
                id="cargo"
                name="cargo"
                label="Selecione o cargo desejado:"
                options={cargos}
                value={formik.values.cargo}
                onChange={(value) => formik.setFieldValue("cargo", value)}
              />
              <Combobox
                id="tecnologia"
                name="tecnologia"
                label="Selecione a tecnologia desejada:"
                options={techs}
                value={formik.values.tecnologia}
                onChange={(value) => formik.setFieldValue("tecnologia", value)}
              />
              <Combobox
                id="formatoEstudos"
                name="formatoEstudos"
                label="Tipo de estudo:"
                options={studyMethods}
                value={formik.values.formatoEstudos}
                onChange={(value) =>
                  formik.setFieldValue("formatoEstudos", value)
                }
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

            <div className="flex flex-col items-center px-6 my-10">
              <div
                className="border-2 border-dashed rounded-lg w-full h-32 flex items-center justify-center cursor-pointer"
                onDrop={handleDrop}
                onClick={handleAreaClick}
              >
                {file ? (
                  <span className="text-white-400">{file.name}</span>
                ) : (
                  "Clique ou arraste um arquivo PDF do seu currículo aqui"
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
            <div className="flex justify-center items-center">
              {isLoading ? <Loading /> : <Button type="submit">Gerar jornada</Button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
