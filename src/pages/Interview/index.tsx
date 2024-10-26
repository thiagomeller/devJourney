import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Select from "@/components/Select";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

export function Interview() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Roadmap");
  };

  return (
    <div className="flex flex-1 h-full justify-center items-center">
      <div className="flex flex-col justify-self-center bg-secondBackground items-center justify-center rounded-sm px-8 py-8 w-1/2 h-auto gap-10">
        <h1 className="text-5xl font-semibold text-center mb-16 text-white">
          Monte sua jornada
        </h1>
        <div className="flex flex-1 gap-28">
          <Formik
          initialValues={{
            cargo: '',
            tecnologia: '',
            tempoMaximoNumero: '',
            tempoMaximoTipo: '',
            tempoMedioNumero: '',
            tempoMedioTipo: '',
            formatoEstudos: '',
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
          > 
          {({handleChange }) => (
            <Form>
          
          <div className="flex flex-1 flex-col gap-2">
            <Select
            id="cargo"
            name="cargo"
              label="Selecione o cargo desejado:"
              options={["dev", "analista"]}
              onChange={handleChange('cargo')}
            />
            <Select
            id="tecnologia"
            name="tecnologia"
              label="Selecione a tecnologia desejada:"
              options={["dev", "analista"]}
              onChange={handleChange('tecnologia')}
            />
            <Select id="formatoEstudos"
            name="formatoEstudos" label="Tipo de estudo:" options={["dev", "analista"]} onChange={handleChange('formatoEstudos')}/>
          </div>
          
          <div className="flex flex-1 h-auto flex-col gap-2 items-center justify-center">
            
            <div className="flex flex-col">
              <label className="block">Tempo para a conclusão</label>
              <div className="flex gap-2 items-center justify-center">
                <Input 
                  id="tempoMaximoNumero"
                  name="tempoMaximoNumero"
                  placeholder="Quantidade" 
                  onChange={handleChange('tempoMaximoNumero')}
                  />
                <Select 
                  id="tempoMaximoTipo"
                  name="tempoMaximoTipo"
                  options={["dev", "analista"]} 
                  onChange={handleChange('tempoMaximoTipo')}
                  />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block">Tempo médio de estudo</label>
              <div className="flex gap-2 items-center justify-center">
                <Input 
                  id="tempoMedioNumero"
                  name="tempoMedioNumero"
                  onChange={handleChange('tempoMedioNumero')}
                  placeholder="Quantidade" />
                <Select 
                  id="tempoMedioTipo"
                  name="tempoMedioTipo"
                  options={["dev", "analista"]} onChange={handleChange('tempoMedioTipo')}/>
              </div>
            </div>
            {/* <div className="p">
              <Select
                optionsLabel="Periodicidade"
                options={["dev", "analista"]}
              />
            </div> */}
          </div>
          <div className="flex flex-1 justify-center items-center mt-2">

      <Button type="submit">Gerar jornada</Button>
          </div>
        </Form>
          )}
          
          </Formik>
        </div>
        <div className="flex flex-col px-8 my-14">
          <label className="block text-center">
            ou faça um upload do seu currículo (formato PDF)
          </label>
          <Button variant="secondary">Upload PDF</Button>
        </div>
      </div>
    </div>
  );
}
