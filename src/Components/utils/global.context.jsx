import { createContext } from "react";

{/*const initialState = {theme: "", data: []}*/}

const DentistContext = createContext();

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <DentistContext.Provider value={{}}>
      {children}
    </DentistContext.Provider>
  );
};

export default Context;
