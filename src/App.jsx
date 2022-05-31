import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useEffect, useState } from "react"


function App() {
  //Props de la API
  // Información de pacientes
  const [pacientes, setPacientes] = useState([]);
  // Información de un paciente para editarlo
  const [paciente, setPaciente] = useState({});

  // Traer información o inicialiazar el localStorage
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  // Actualizar el local Storage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])


  const eliminarPaciente=(id)=>{
    const nuevosPacientes = pacientes.filter(pacienteState =>{            
      return pacienteState.id != id
    });
    setPacientes(nuevosPacientes);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
