const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/4 bg-white mt-5 p-3 rounded-md">
      <h2 className="text-2xl text-indigo-600 text-center font-bold">
        Registrar una cita
      </h2>
      <form className="mt-3">
        <div className="mb-5">
          <label
          className="block text-gray-700 font-bold uppercase"
          htmlFor="name">Nombre Mascota</label>
          <input 
          className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
          type="text" id="name" placeholder="Nombre de la mascota"/>
        </div>

        <div className="mb-5">
          <label
          className="block text-gray-700 font-bold uppercase"
          htmlFor="propietario">Propietario</label>
          <input 
          className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
          type="text" id="propietario" placeholder="Nombre del propietario"/>
        </div>

        <div className="mb-5">
          <label
          className="block text-gray-700 font-bold uppercase"
          htmlFor="email">Correo Electronico</label>
          <input 
          className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
          type="email" id="email" placeholder="Correo Electronico"/>
        </div>

        <div className="mb-5">
          <label
          className="block text-gray-700 font-bold uppercase"
          htmlFor="fecha">Fecha de ingreso</label>
          <input 
          className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
          type="date" id="fecha" placeholder="Fecha de ingreso"/>
        </div>

        <div className="mb-5">
          <label
          className="block text-gray-700 font-bold uppercase"
          htmlFor="sintomas">Describa los síntomas</label>
          <textarea
          className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
          id="sintomas"
          placeholder="Describa los sintomas"
          />
        </div>

        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar cita"/>
      </form>
    </div>
  )
}

export default Form