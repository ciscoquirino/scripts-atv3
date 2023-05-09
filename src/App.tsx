import { useEffect, useState } from "react";
import { Contexto, Provider } from "./contexts/Contexto";
import { AppRoutes } from "./routes/AppRoutes";
import Carregando from "./components/Carregando";



function App() {
  const [carrega, setCarrega] = useState(true);

  useEffect(() => {
    if(Contexto.Provider !== null) {
      setCarrega(false);
    }
  }, [])
  

  return (
    <>
    { carrega === false ? (
      <Provider>
      <AppRoutes />
      </Provider>
    ) : (
      <Carregando />
    )}
    </>
  );
}




export default App;
