import { Button } from "@/components/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Interview() {
  return (
    <>
      <div className="flex flex-col bg-secondBackground items-center justify-center rounded-sm px-28 py-32 max-w-screen-sm max-h-96 gap-10">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-col gap-4 px-8">
          <Button>Entrar</Button>
          <Button variant="secondary">Cadastrar-se</Button>
        </div>
      </div>
    </>
  );
}
