import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({addTodo}) => {
    const [todo, setTodo] = useState({
        title: 'To Do #01',
        description: '',
        state: 'pendiente',
        priority: true
    });

    const {title, description, state, priority} = todo;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim() || !description.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'Oops. . . ',
                text: 'Titulo y descripcion obligatorios',
            });
            
        }
        addTodo({
            id:Date.now(),
            ...todo,
            state: state === 'completado'
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'To Do agregado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
        
    }

    const handleChange = (e) => {
        const {name, type, checked, value} = e.target
        setTodo({...todo, [name]: type === 'checkbox' ? checked : value});
    }

    return (
       <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese To Do" className="form-control" name="title" value={title} onChange={handleChange}/>
            <textarea className="form-control mb-2" placeholder="Ingrese descripcion" name="description" value={description} onChange={handleChange}/>
            <div className="form-check mb-2">
                <label htmlFor="inputCheck">Dar prioridad</label>
                <input type="checkbox" name="priority" className="form-check-input" id="inputCheck" checked={priority} onChange={handleChange}/>
            </div>
            <select className="form-select mb-2" name="state" value={state} onChange={handleChange}>
                <option value='pendiente'>Pendiente</option>
                <option value='completado'>Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Agregar To Do</button>
       </form>
    )
}

export default Formulario