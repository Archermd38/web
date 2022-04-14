import React, { useState } from 'react'

const Form = () => {

    const [todo, setTodo] = useState({
        todoName:'',
        todoDescripcion:'',
        todoEstado:'pendiente',
        todoCheck: false,
    })

    const [error, setError] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault();

        const {todoName, todoDescripcion} = todo

        if (!todoName.trim() || !todoDescripcion.trim()) {
            console.log("campos vacíos");
            setError(true);
            return;
        } else {
            setError(false);
        }

    }

    const PintarError = () => (
        <div
          className="alert alert-danger"
        >Todos los campos obligatorios</div>
    );

    const handleChange = e =>{
        e.preventDefault();

        const {name, value, checked, type} = e.target

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value
        })
    }

  return (
        <>
            <h2>Formulario</h2>

            {error && <PintarError />}

            <form  onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="ingrese todo"
                name="todoName"
                className="form-control mb-2"
                onChange={handleChange}
                value={todo.todoName}
                />

                <textarea 
                name="todoDescripcion" 
                placeholder="ingrese descripcion del todo"
                className="form-control mb-2"
                onChange={handleChange}
                value={todo.todoDescripcion}
                />

                <select name="todoEstado"
                className="form-control mb-2"
                onChange={handleChange}
                value={todo.todoEstado}
                >
                <option value="Pendiente">Pendiente</option>
                <option value="Completada">Completada</option>
                </select>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        checked={todo.todoCheck}
                        onChange={handleChange}
                        name="todoCheck"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>


                <button type="submit" className='btn btn-primary'>Agragar</button>
            </form>
    </>
  )
}

export default Form