import { useRef, useState } from "react";

const NoControlado = () => {

    const form = useRef(null);
    const [error, setError] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const data = new FormData(form.current);
        const {title, description, estado} = Object.fromEntries([...data.entries()]);

        if(!title.trim() || !description.trim() || !estado.trim()) return setError('El campo no puede estar vacio');

    }

    return (
       <form onSubmit={handleSubmit} ref={form}>
            <input type="text" placeholder="Ingrese To Do" className="form-control" name="title" defaultValue='ToDo #01'/>
            <textarea className="form-control mb-2" placeholder="Ingrese descripcion" name="description" defaultValue='Descripcion #01'/>
            <select className="form-select mb-2" name="state" defaultValue='completado'>
                <option value='pendiente'>Pendiente</option>
                <option value='completado'>Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Enviar</button>
            {
                //cuando no se necesita respuesta negativa en vez de usar un ternario se usa && 
                //que indica que si la condicion se cumple, se hace lo que esta del lado derecho, o sea despues de las &&
                error !== '' && error
            }
       </form>
    )
}

export default NoControlado