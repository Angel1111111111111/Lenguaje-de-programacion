export const Patiens = ({ cita, setCita, eliminarCita }) => {
  const {name, propietario, email, fecha, sintomas, id} = cita;

  const handleEliminar = () => {

    const respuesta = confirm('¿Estas seguro de eliminar esta cita?');

    if(respuesta) {
      eliminarCita(id);
    }
  }

  return (
        <div className="bg-white shadow-md rounded-md mx-3 px-5 py-10 mb-5">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Moscota: {''}
            <span className="font-normal normal-case">{name}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Correo Electronico: {''}
            <span className="font-normal normal-case">{email}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha: {''}
            <span className="font-normal normal-case">{fecha}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <button className="py-2 
            bg-indigo-600 
            text-white px-10 
            hover:bg-indigo-700 font-bold uppercase rounded-md"
              onClick={() => setCita(cita)}>
              Editar
            </button> 

            <button 
            onClick={handleEliminar}
              className="py-2 
             bg-red-600 
             text-white px-10 
             hover:bg-red-700 font-bold uppercase rounded-md">
              Borrar
            </button>
          </div>

        </div>
  )
}
