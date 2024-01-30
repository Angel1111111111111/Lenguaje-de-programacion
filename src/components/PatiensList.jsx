import { Patiens } from "./Patiens"

const PatiensList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 bg-white mt-5 mx-5 p-3 rounded-md md:overflow-y-scroll md:h-screen">
        <h2 className="text-2xl text-indigo-600 text-center font-bold">
          Listado de paciente
        </h2>

        <Patiens/>
        <Patiens/>
        <Patiens/>
        <Patiens/>
        <Patiens/>
    </div>
  )
}

export default PatiensList