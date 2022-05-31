import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState } from "react"


function App() {
  //Props de la API
  //1. Información de pacientes
  const [pacientes, setPacientes] = useState([]);
  //2. Información de un paciente para editarlo
  const [paciente, setPaciente] = useState({});

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
        />
      </div>
    </div>
  )
}

export default App
