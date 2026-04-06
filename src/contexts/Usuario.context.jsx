import { createContext, useState } from "react";

export const UsuarioContext=createContext();

export const UsuarioProvider = ({ children }) => {
  const [nombre, setNombre] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [cantidadEjercicio,setCantidadEjercicio]=useState(0);

  return (
    <UsuarioContext.Provider value={{
        nombre,
    setNombre,
    peso,
    setPeso,
    altura,
    setAltura,
    cantidadEjercicio,
    setCantidadEjercicio
    }}>
      {children}
    </UsuarioContext.Provider>
  )
}