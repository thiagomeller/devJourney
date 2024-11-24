export interface Etapa {
  etapa: string;
  recursos: Recurso[];
  tempoEstudoSemanal: string;
  duracaoTotal: string;
}

export interface Recurso {
  tipo: string;
  titulo?: string;
  link: string;
  nome?: string;
}