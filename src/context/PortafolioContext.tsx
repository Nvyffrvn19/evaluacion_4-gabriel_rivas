import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ContextoPortafolio {
  nombre: string;
  usuarioGitHub: string;
  visitas: number;
  registrarVisita: () => void;
}

const PortafolioContext = createContext<ContextoPortafolio | undefined>(
  undefined,
);

export function ProveedorPortafolio({ children }: { children: ReactNode }) {
  const [visitas, setVisitas] = useState(0);

  function registrarVisita() {
    setVisitas((valorAnterior) => valorAnterior + 1);
  }

  return (
    <PortafolioContext.Provider
      value={{
        nombre: "Gabriel Rivas",
        usuarioGitHub: "Nvyffrvn19",
        visitas,
        registrarVisita,
      }}
    >
      {children}
    </PortafolioContext.Provider>
  );
}

export function usarPortafolio() {
  const contexto = useContext(PortafolioContext);

  if (!contexto) {
    throw new Error(
      "usarPortafolio debe utilizarse dentro de ProveedorPortafolio",
    );
  }

  return contexto;
}
