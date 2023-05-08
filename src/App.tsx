import { useEffect, useState } from "react";
import { Contexto, Provider } from "./contexts/Contexto";
import { AppRoutes } from "./routes/AppRoutes";
import Load from "./components/Load";


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
      <Load />
    )}
    </>
  );
}

export default App;
