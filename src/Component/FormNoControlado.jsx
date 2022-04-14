import React, { useRef } from 'react'

const FormNoControlado = () => {

  const formulario = useRef(null)

  const handleSubmit = e =>{
    e.preventDefault()
    
    const data = new FormData(formulario.current);

    const objetosDatos = Object.fromEntries([...data.entries()])
    console.log(objetosDatos);

    const {todoDescripcion, todoEstado, todoName} = objetosDatos;

    if(!todoDescripcion.trim() || !todoName.trim()){
      console.log("no paso")
      return
    }


    console.log("paso")


  }


  return (
      <>
        <h2>Formulario no controlado</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="ingrese todo"
            name="todoName"
            className="form-control mb-2"
            />

            <textarea 
            name="todoDescripcion" 
            placeholder="ingrese descripcion del todo"
            className="form-control mb-2"
            />
            <select name="todoEstado"
            className="form-control mb-2"
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Completada">Completada</option>
            </select>
            <button type="submit" className='btn btn-primary'>Agragar</button>
        </form>
      </>

  )
}

export default FormNoControlado