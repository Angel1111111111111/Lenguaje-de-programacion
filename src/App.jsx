import Header from "./components/Header"
import Form from "./components/Form"
import PatiensList from "./components/PatiensList"

function App() {

  return (
    <div className="container mx-auto mt-8">
      <Header />
      <div className="md:flex mt-10">
        <Form />
        <PatiensList/>
      </div>
    </div>
  )
}

export default App
