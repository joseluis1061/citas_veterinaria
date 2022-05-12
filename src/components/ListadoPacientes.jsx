import Paciente from "./Paciente"
const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center">
        ListadoPacientes 
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra {''}
        <span className="text-indigo-600 font-bold">
        Pacientes y citas</span>
      </p>

      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
    
    </div>
  )
}

export default ListadoPacientes
