export interface Etapa {
  Etapa: string;
  Recursos: Recurso[];
  TempoEstudoSemanal: string;
  DuracaoTotal: string;
}

export interface Recurso {
  Tipo: string;
  Título?: string;
  Link: string;
  Nome?: string;
}