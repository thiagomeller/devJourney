import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Select from "@/components/Select";
import { useNavigate } from 'react-router-dom';

export function Interview() {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/Roadmap'); 
  };
  
  return (
    <div className="flex flex-1 h-full justify-center items-center">
      <div className="flex flex-col justify-self-center bg-secondBackground items-center justify-center rounded-sm px-8 py-8 w-1/2 h-auto gap-10">
        <p className="text-5xl font-semibold text-center mb-16">
          Monte sua jornada
        </p>
        <div className="flex flex-1 gap-28">
          <div className="flex flex-1 flex-col gap-2">
            <Select
              label="Selecione o cargo desejado:"
              options={["dev", "analista"]}
            />
            <Select
              label="Selecione o cargo desejado:"
              options={["dev", "analista"]}
            />
            <Select label="Tecnologia:" options={["dev", "analista"]} />
          </div>
          <div className="flex flex-1 h-auto flex-col gap-2 items-center justify-center">
            <div className="flex flex-col">
              <label className="block">Tempo para a conclusão</label>
              <div className="flex gap-2 items-center justify-center">
                <Input placeholder="Quantidade" />
                <Select options={["dev", "analista"]} />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block">Tempo médio de estudo</label>
              <div className="flex gap-2 items-center justify-center">
                <Input placeholder="Quantidade" />
                <Select options={["dev", "analista"]} />
              </div>
            </div>
            <div className="p">
              <Select
                optionsLabel="Periodicidade"
                options={["dev", "analista"]}
              />
            </div>
          </div>
        </div>
        <Button onClick={handleNavigate}>Gerar jornada</Button>
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
