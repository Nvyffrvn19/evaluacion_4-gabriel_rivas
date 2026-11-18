export type CategoriaProyecto = "Frontend" | "Backend";

export interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: CategoriaProyecto;
  tecnologias: string[];
  imagen: string;
  repositorio: string;
  demostracion?: string;
}
