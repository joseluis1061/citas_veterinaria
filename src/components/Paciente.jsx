const Paciente = () => {
  return (
    
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Nombre: <span className="font-normal normal-case">Paco</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Propietario: <span className="font-normal normal-case">Jose</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Email: <span className="font-normal normal-case">correo@correo.com</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Fecha de alta: <span className="font-normal normal-case">20 Diciembre 2022</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Sintomas: <span className="font-normal normal-case">Solo duerme y maulla mucho cuando se levanta</span>
    </p>
  </div>
  )
}

export default Paciente