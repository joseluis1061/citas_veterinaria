import {useState, useEffect} from "react";
import {Error} from "./Error";

const Formulario = ({pacientes, setPacientes, AlertaError}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    //Error
    const [error, setError] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();

        //Validación del formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true);
            return;
        }
        setError(false);

        //Capturo información de paciente
        const nuevoPaciente = {
            nombre, 
            propietario,
            email,
            fecha, 
            sintomas
        };
        //Guardo la información en el array de pacientes
        setPacientes([...pacientes, nuevoPaciente]);

        //Reiniciar un formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    };

    return ( 
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
            Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes {''}
            y <span className="text-indigo-600 font-bold">
                Administralos
            </span>
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
     
            {error && 
                <Error> 
                    <p>Todos los campos son obligatorios</p>
                </Error>
            }

            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase">
                    Nombre Mascota
                </label>
                <input 
                    id="mascota"
                    type="text" 
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange = {(e)=> setNombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase">
                    Nombre Propietario
                </label>
                <input 
                    id="propietario"
                    type="text" 
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange = {(e)=> setPropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase">
                    Email
                </label>
                <input 
                    id="email"
                    type="text" 
                    placeholder="Email contacto propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange = {(e)=> setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase">
                    Alta
                </label>
                <input 
                    id="alta"
                    type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange = {(e)=> setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase">
                    Sintomas
                </label>
                <textarea 
                    id="sintomas"
                    placeholder="Describe tus sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={sintomas}
                    onChange = {(e)=> setSintomas(e.target.value)}
                />
            </div>

            <input type="submit" 
                className="bg-indigo-600 p-3 w-full text-white font-bold
                hover:bg-indigo-700 cursor-pointer transition-all"
                value="Agregar Paciente"
           />
           
        </form>
    </div>
    );
}
 
export default Formulario;