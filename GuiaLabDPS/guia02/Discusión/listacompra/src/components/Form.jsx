import React,{useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [compra,setCompra] = useState({});
    const [cantidad,setCantidad] = useState({});
    const [lista,setLista] = useState([
        {
            cantidad: 3,
            compra: 'Manzana'
        },
        {
            cantidad: 5,
            compra: 'Rabano'
        },
        {
            cantidad: 1,
            compra: 'Pasta de Dientes'
        },
        
    ])
    const handleClick = e => {
        if(Object.keys(compra).length === 0 || Object.keys(cantidad).length === 0){
            alert('El campo no puede estar vacio');
        }
        setLista([...lista, {cantidad:cantidad,compra:compra}])
    }
    const deleteTodo = indice => {
        const newLista = [...lista]
        newLista.splice(indice,1)
        setLista(newLista)
    }
    return (
        <>
            <form onSubmit={e=>e.preventDefault()}>
                <label>Agregar Compra</label><br/>
                <input type="text" name="compra" onChange={e=>setCompra(e.target.value)} placeholder="Compra"/>
                <input type="text" name="cantidad" onChange={e=>setCantidad(e.target.value)} placeholder="Cantidad"/>
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                lista.map((value,index)=>(
                    <Todo lista={value} key={index} index={index} deleteTodo={deleteTodo} />
                ))
            }
        </>
    )
}

export default Form;