import { useEffect, useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatiensList from "./components/PatiensList"

function App() {

  const [citas, setCitas] = useState( JSON.parse(localStorage.getItem('citas')) ?? []);
  const [cita, setCita] = useState({});

  useEffect(() => {
    //console.log('componente listo o cambio en citas');
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const eliminarCita = (id) => {
    //console.log('Eliminando la cita: ', id);
    const citasActualizadas = citas.filter((cita) => cita.id !== id);
    setCitas(citasActualizadas);
  }

  // const imprime2Mas2 = () => {
  //   console.log(2+2);
  // }

  // const tomarUnValor = (valor) => {
  //   console.log(valor);
  // }
  // TODO: prop {children}
  return (
    <div className="container mx-auto mt-8">
      <Header
      // numeros = {1}
      // isAdmin= {true}
      // fn ={ imprime2Mas2 }
      // tomarUnValor={tomarUnValor}
      />
      <div className="md:flex mt-10">
        <Form
          citas={citas}
          setCitas={setCitas}
          cita={cita}
          setCita={setCita}
        />
        <PatiensList
          citas={citas}
          setCita={setCita}
          eliminarCita={eliminarCita}
        />


      </div>
    </div>
  )
}

export default App
